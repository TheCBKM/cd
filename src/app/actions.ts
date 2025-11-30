'use server';

import { z } from 'zod';
import { getHealthSuggestion } from '@/ai/flows/health-suggestion-tool';

const schema = z.object({
  healthNeeds: z.string().min(10, { message: 'Please describe your health needs in at least 10 characters.' }),
});

export type FormState = {
  message: string;
  products?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function suggestProducts(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    healthNeeds: formData.get('healthNeeds'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Failed to process your request.',
      issues: issues,
      fields: {
        healthNeeds: formData.get('healthNeeds')?.toString() ?? '',
      },
    };
  }

  try {
    const result = await getHealthSuggestion({ healthNeeds: validatedFields.data.healthNeeds });
    if (result && result.products) {
      return { message: 'Here are our suggestions for you:', products: result.products };
    }
    return { message: 'Sorry, we couldn\'t find any suggestions. Please try rephrasing your needs.' };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred on our end. Please try again later.' };
  }
}
