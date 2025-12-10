'use server';

/**
 * @fileOverview An AI-powered FAQ agent.
 *
 * - answerQuestion - A function that answers user questions using existing FAQs or AI generation.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  question: z.string().describe('La pregunta del usuario.'),
  existingFaqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).describe('Preguntas y respuestas frecuentes existentes.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('La respuesta a la pregunta del usuario.'),
  isNewAnswer: z.boolean().describe('Indica si la respuesta es generada nuevamente o proviene de las FAQs existentes.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(input: AnswerQuestionInput): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `Eres un asistente de IA que responde preguntas de usuarios basándose en FAQs existentes o genera nuevas respuestas si las FAQs no contienen la información. Responde siempre en español.

FAQs Existentes:
{{#each existingFaqs}}
Pregunta: {{{this.question}}}
Respuesta: {{{this.answer}}}
{{/each}}

Pregunta del Usuario: {{{question}}}

Si la pregunta puede ser respondida usando las FAQs existentes, devuelve la respuesta correspondiente y establece "isNewAnswer" en false. Si la pregunta no puede ser respondida usando las FAQs existentes, genera una respuesta útil y relevante, y establece "isNewAnswer" en true.
`,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
