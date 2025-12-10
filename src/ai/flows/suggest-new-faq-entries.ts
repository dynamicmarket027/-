'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting new FAQ entries based on user questions.
 *
 * It exports:
 * - `suggestNewFAQEntries`: An asynchronous function that takes a user question as input and returns a suggested FAQ entry.
 * - `SuggestNewFAQEntriesInput`: The input type for the `suggestNewFAQEntries` function.
 * - `SuggestNewFAQEntriesOutput`: The output type for the `suggestNewFAQEntries` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNewFAQEntriesInputSchema = z.object({
  userQuestion: z
    .string()
    .describe('La pregunta formulada por el usuario que la IA tuvo que responder.'),
});
export type SuggestNewFAQEntriesInput = z.infer<typeof SuggestNewFAQEntriesInputSchema>;

const SuggestNewFAQEntriesOutputSchema = z.object({
  suggestedFAQEntry: z
    .string()
    .describe('Una entrada de FAQ sugerida basada en la pregunta del usuario.'),
});
export type SuggestNewFAQEntriesOutput = z.infer<typeof SuggestNewFAQEntriesOutputSchema>;

export async function suggestNewFAQEntries(
  input: SuggestNewFAQEntriesInput
): Promise<SuggestNewFAQEntriesOutput> {
  return suggestNewFAQEntriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestNewFAQEntriesPrompt',
  input: {schema: SuggestNewFAQEntriesInputSchema},
  output: {schema: SuggestNewFAQEntriesOutputSchema},
  prompt: `Eres un asistente de IA encargado de sugerir nuevas entradas para las FAQ (Preguntas Frecuentes) basadas en preguntas de los usuarios que no estaban cubiertas en las FAQ existentes.

  El objetivo es mejorar las FAQ con el tiempo añadiendo entradas que aborden las consultas comunes de los usuarios.

  Basándote en la siguiente pregunta de un usuario, por favor, sugiere una nueva entrada para las FAQ. La entrada debe estar en formato de pregunta y respuesta, en español:

  Pregunta del Usuario: {{{userQuestion}}}

  Entrada de FAQ Sugerida:`,
});

const suggestNewFAQEntriesFlow = ai.defineFlow(
  {
    name: 'suggestNewFAQEntriesFlow',
    inputSchema: SuggestNewFAQEntriesInputSchema,
    outputSchema: SuggestNewFAQEntriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
