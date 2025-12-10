"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { handleLeadCapture, type LeadFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Enviando...' : 'Solicitar una Consultoría'}
    </Button>
  );
}

export default function LeadCapture() {
  const initialState: LeadFormState = { message: "", success: false };
  const [state, formAction] = useFormState(handleLeadCapture, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "¡Éxito!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="demo" className="w-full">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">Solicita tu Consultoría Gratuita</CardTitle>
            <CardDescription>
              Hablemos sobre cómo Soft WareHouse AI puede ayudar a tu negocio a crecer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" name="name" placeholder="Juan Pérez" />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="juan.perez@empresa.com" />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" name="company" placeholder="Tu Empresa S.A." />
                     {state.errors?.company && <p className="text-sm text-destructive">{state.errors.company[0]}</p>}
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="role">Tu Rol</Label>
                    <Input id="role" name="role" placeholder="Ej. Gerente de Marketing" />
                 </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productInterest">Servicio de Interés</Label>
                <Select name="productInterest">
                  <SelectTrigger id="productInterest">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map(p => <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>)}
                  </SelectContent>
                </Select>
                 {state.errors?.productInterest && <p className="text-sm text-destructive">{state.errors.productInterest[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="comments">Comentarios (opcional)</Label>
                <Textarea id="comments" name="comments" placeholder="Cuéntanos sobre tus necesidades..." />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="gdprConsent" name="gdprConsent" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="gdprConsent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto que mis datos sean procesados para recibir información sobre los servicios de SoftWareHouse AI.
                  </label>
                   {state.errors?.gdprConsent && <p className="text-sm text-destructive">{state.errors.gdprConsent[0]}</p>}
                </div>
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
    </section>
  );
}
