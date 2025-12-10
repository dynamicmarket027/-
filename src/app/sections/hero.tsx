
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/20 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern -z-10"></div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline animate-fade-in-up">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up animation-delay-300">
            Desde desarrollo a medida hasta consultoría estratégica, te ofrecemos las soluciones tecnológicas que necesitas para escalar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#products">Explora Servicios</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background">
              <Link href="/contact">Contacta con nosotros</Link>
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}
