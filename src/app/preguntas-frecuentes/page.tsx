
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleFaqQuestion } from "@/app/actions";
import { Loader2, Send } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  const [question, setQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<{ question: string; answer: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setError(null);
    setAiAnswer(null);

    const result = await handleFaqQuestion(question);

    if (result.answer) {
      setAiAnswer({ question, answer: result.answer });
    } else {
      setError(result.error);
    }

    setIsLoading(false);
    setQuestion("");
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Hemos recopilado las preguntas más comunes. Si no encuentras lo que buscas, nuestro asistente de IA está listo para ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="p-8 rounded-lg bg-secondary sticky top-24">
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Pregúntale a nuestra IA
              </h3>
              <p className="text-muted-foreground mb-6">
                Obtén una respuesta instantánea a tu pregunta de nuestro
                asistente inteligente.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                <Input
                  type="text"
                  placeholder="Escribe tu pregunta aquí..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !question.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Enviar pregunta</span>
                </Button>
              </form>
              <div className="min-h-[100px] bg-background p-4 rounded-md">
                {isLoading && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Pensando...</span>
                  </div>
                )}
                {error && <p className="text-destructive">{error}</p>}
                {aiAnswer && (
                  <div className="space-y-4">
                    <p className="font-semibold">{aiAnswer.question}</p>
                    <p className="text-muted-foreground">{aiAnswer.answer}</p>
                  </div>
                )}
                {!isLoading && !error && !aiAnswer && (
                  <p className="text-muted-foreground">
                    Tu respuesta aparecerá aquí.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
