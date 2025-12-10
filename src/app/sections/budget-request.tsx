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
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Enviando...' : 'Pedir Presupuesto'}
    </Button>
  );
}

export default function BudgetRequest() {
  const initialState: LeadFormState = { message: "", success: false };
  const [state, formAction] = useFormState(handleLeadCapture, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "¡Presupuesto solicitado!",
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
    <section id="budget" className="w-full">
        <Card className="shadow-xl border-primary ring-2 ring-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">Pide tu Presupuesto</CardTitle>
            <CardDescription>
              Soluciones a medida para grandes empresas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name-budget">Nombre Completo</Label>
                  <Input id="name-budget" name="name" placeholder="Juan Pérez" />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-budget">Correo Electrónico</Label>
                  <Input id="email-budget" name="email" type="email" placeholder="juan.perez@empresa.com" />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="company-budget">Empresa</Label>
                    <Input id="company-budget" name="company" placeholder="Tu Empresa S.A." />
                     {state.errors?.company && <p className="text-sm text-destructive">{state.errors.company[0]}</p>}
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="role-budget">Tu Rol</Label>
                    <Input id="role-budget" name="role" placeholder="Ej. Director de Tecnología" />
                 </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productInterest-budget">Producto de Interés</Label>
                <Select name="productInterest" defaultValue="enterprise">
                  <SelectTrigger id="productInterest-budget">
                    <SelectValue placeholder="Selecciona un producto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enterprise">Plan Empresarial</SelectItem>
                    {products.map(p => <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>)}
                  </SelectContent>
                </Select>
                 {state.errors?.productInterest && <p className="text-sm text-destructive">{state.errors.productInterest[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="comments-budget">Describe tu proyecto (opcional)</Label>
                <Textarea id="comments-budget" name="comments" placeholder="Cuéntanos tus requerimientos específicos..." />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="gdprConsent-budget" name="gdprConsent" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="gdprConsent-budget"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto que mis datos sean procesados para recibir un presupuesto e información sobre los productos de SoftWareHouse AI.
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
