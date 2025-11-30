'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { suggestProducts, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Wand2 className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Suggestions
        </>
      )}
    </Button>
  );
}

export default function HealthSuggestionTool() {
  const initialState: FormState = { message: '' };
  const [state, formAction] = useFormState(suggestProducts, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: state.issues.join(', '),
      });
    } else if (state.message && state.products) {
      // Success is handled by displaying the card, no toast needed unless for confirmation
    } else if(state.message && !state.products && !state.issues) {
      toast({
        title: 'Notice',
        description: state.message,
      });
    }

    if (state.message && state.products) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="ai-tool" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl grid gap-8">
            <div className="space-y-4 text-center">
                <Wand2 className="mx-auto h-12 w-12 text-primary" />
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                AI-Powered Health Assistant
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                Describe your health needs, and our AI will suggest the best Chaitanya Enterprises products for you.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Get Personalized Suggestions</CardTitle>
                    <CardDescription>
                        For example: "I feel tired in the afternoons and want a natural energy boost. I prefer something I can drink."
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} action={formAction} className="space-y-4">
                        <div className="grid w-full gap-2">
                        <Label htmlFor="healthNeeds">Your Health Needs</Label>
                        <Textarea
                            id="healthNeeds"
                            name="healthNeeds"
                            placeholder="Tell us about your wellness goals..."
                            rows={4}
                            required
                            defaultValue={state.fields?.healthNeeds}
                        />
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>

            {state?.products && (
                <Card className="bg-background animate-in fade-in-50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle2 className="text-accent" />
                            Here are your suggestions:
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-sm max-w-full text-foreground">
                            <p>{state.products}</p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
    </section>
  );
}
