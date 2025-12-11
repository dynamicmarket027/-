"use server";

import { z } from "zod";

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