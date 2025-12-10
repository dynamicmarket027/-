"use server";

import { z } from "zod";
import { answerQuestion } from "@/ai/flows/ai-powered-faq";
import { suggestNewFAQEntries } from "@/ai/flows/suggest-new-faq-entries";
import { faqs } from "@/lib/data";

// --- FAQ Action ---

export async function handleFaqQuestion(
  question: string
): Promise<{ answer: string | null; error: string | null }> {
  if (!question || question.trim().length < 5) {
    return { answer: null, error: "Por favor, haz una pregunta más detallada." };
  }

  try {
    const result = await answerQuestion({
      question,
      existingFaqs: faqs,
    });

    if (result.isNewAnswer) {
      console.log("La IA generó una nueva respuesta. Sugiriendo una nueva entrada de FAQ al administrador...");
      try {
        const suggestionResult = await suggestNewFAQEntries({ userQuestion: question });
        console.log("Nueva entrada de FAQ sugerida:", suggestionResult.suggestedFAQEntry);
      } catch (suggestionError) {
        console.error("No se pudo obtener la sugerencia de FAQ:", suggestionError);
      }
    }

    return { answer: result.answer, error: null };
  } catch (e) {
    console.error("Error al procesar la pregunta de FAQ:", e);
    return {
      answer: null,
      error: "Lo siento, no pude procesar tu pregunta en este momento. Por favor, inténtalo de nuevo más tarde.",
    };
  }
}

// --- Lead Capture Action ---

const leadFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce una dirección de correo electrónico válida."),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres."),
  productInterest: z.string({ required_error: "Por favor, selecciona un producto." }),
  comments: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val, {
    message: "Debes aceptar los términos para continuar.",
  }),
});

export type LeadFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    productInterest?: string[];
    gdprConsent?: string[];
  };
  success: boolean;
};

export async function handleLeadCapture(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  
  const validatedFields = leadFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    productInterest: formData.get("productInterest"),
    comments: formData.get("comments"),
    gdprConsent: formData.get("gdprConsent") === "on",
  });

  if (!validatedFields.success) {
    return {
      message: "Por favor, corrige los errores a continuación.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // Aquí normalmente guardarías los datos en una base de datos (p.ej., Firestore)
  // o los enviarías a un CRM. Para este ejemplo, solo lo registraremos en la consola.
  console.log("Nuevo Lead Capturado:", validatedFields.data);

  return {
    message: "¡Gracias por tu interés! Nos pondremos en contacto contigo en breve.",
    success: true,
  };
}
