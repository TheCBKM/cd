'use server';

/**
 * @fileOverview Provides personalized product recommendations based on user-input health needs.
 *
 * - getHealthSuggestion - A function that takes user input and returns product recommendations.
 * - HealthSuggestionInput - The input type for the getHealthSuggestion function.
 * - HealthSuggestionOutput - The return type for the getHealthSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HealthSuggestionInputSchema = z.object({
  healthNeeds: z
    .string()
    .describe('A description of the user health needs and preferences.'),
});
export type HealthSuggestionInput = z.infer<typeof HealthSuggestionInputSchema>;

const HealthSuggestionOutputSchema = z.object({
  products: z
    .string()
    .describe(
      'A list of product recommendations from Chaitanya Enterprises, tailored to the user health needs.'
    ),
});
export type HealthSuggestionOutput = z.infer<typeof HealthSuggestionOutputSchema>;

export async function getHealthSuggestion(input: HealthSuggestionInput): Promise<HealthSuggestionOutput> {
  return getHealthSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'healthSuggestionPrompt',
  input: {schema: HealthSuggestionInputSchema},
  output: {schema: HealthSuggestionOutputSchema},
  prompt: `You are an AI assistant specialized in recommending products from Chaitanya Enterprises.

  Based on the user's described health needs, provide a list of suitable product recommendations.
  Consider existing stock, popularity, and user feedback in your recommendations.

  Health Needs: {{{healthNeeds}}}`,
});

const getHealthSuggestionFlow = ai.defineFlow(
  {
    name: 'getHealthSuggestionFlow',
    inputSchema: HealthSuggestionInputSchema,
    outputSchema: HealthSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
