"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code,
  GitMerge,
  Handshake,
  Search,
  Settings,
  GanttChartSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    title: "Desarrollo a Medida",
    description:
      "Creamos aplicaciones móviles, web, CRMs y ERPs totalmente personalizados para las necesidades específicas de tu negocio.",
    cta: "Ver servicios",
    href: "/business#products",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 mb-4 text-primary" />,
    title: "Consultoría Tecnológica",
    description:
      "Te asesoramos para transformar la visión tecnológica de tu empresa, desde la estrategia hasta la implementación.",
    cta: "Saber más",
    href: "/business#products",
  },
  {
    icon: <GitMerge className="w-8 h-8 mb-4 text-primary" />,
    title: "Integración de Sistemas",
    description:
      "Conectamos tus herramientas y plataformas existentes para crear un ecosistema tecnológico cohesivo y eficiente.",
    cta: "Ver soluciones",
    href: "/business#products",
  },
  {
    icon: <GanttChartSquare className="w-8 h-8 mb-4 text-primary" />,
    title: "Metodologías Ágiles",
    description:
      "Implementamos y optimizamos procesos ágiles para acelerar el desarrollo y mejorar la productividad de tu equipo.",
    cta: "Optimiza procesos",
    href: "/business#products",
  },
];

const values = [
  {
    icon: <Handshake className="w-8 h-8 mb-4 text-primary" />,
    title: "Socio Tecnológico",
    description:
      "Más que proveedores, somos tu aliado estratégico. Nos implicamos en tu proyecto para asegurar que la tecnología impulse tu crecimiento.",
  },
  {
    icon: <Settings className="w-8 h-8 mb-4 text-primary" />,
    title: "Soluciones Integrales",
    description:
      "Desarrollamos soluciones robustas, seguras y escalables, listas para integrarse con tus sistemas y operar a nivel global.",
  },
  {
    icon: <Search className="w-8 h-8 mb-4 text-primary" />,
    title: "Metodología Adaptada",
    description:
      "Cada negocio es único. Adaptamos nuestra metodología a tus objetivos, plazos y presupuesto para garantizar el éxito del proyecto.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section
          id="hero"
          className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10 -z-10" />
          <div className="absolute inset-0 bg-grid-pattern -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-[-9]" />

          <div className="container px-4 md:px-6 z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Logo */}
              <div className="mb-6 flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Soft Warehouse Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  priority
                />
                <span className="text-xl font-bold tracking-tight">
                  Soft Warehouse
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline animate-fade-in-up">
                Tu Socio Tecnológico para la Innovación
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl animate-fade-in-up animation-delay-300">
                Transformamos tus ideas en soluciones de software a medida.
                Déjanos la tecnología a nosotros y céntrate en hacer crecer tu
                negocio.
              </p>

              <div className="flex gap-4 animate-fade-in-up animation-delay-600">
                <Button asChild size="lg">
                  <Link href="/business">Nuestros Servicios</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-background/50"
                >
                  <Link href="/contact">Solicita una Consultoría</Link>
                </Button>
              </div>
            </div>
          </div>

          <style jsx>{`
            .bg-grid-pattern {
              background-image: linear-gradient(
                  to right,
                  hsl(var(--border)) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  hsl(var(--border)) 1px,
                  transparent 1px
                );
              background-size: 60px 60px;
              opacity: 0.1;
              animation: pan 20s linear infinite;
            }
            @keyframes pan {
              from {
                background-position: 0 0;
              }
              to {
                background-position: 60px 60px;
              }
            }
          `}</style>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Soluciones para Impulsar tu Negocio
              </h2>
              <p className="text-lg text-muted-foreground">
                Servicios diseñados para optimizar tus operaciones y acelerar tu
                transformación digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="text-center bg-secondary/30 border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-sm">
                      {service.description}
                    </CardDescription>
                    <Button variant="link" asChild>
                      <Link href={service.href}>
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Comprometidos con tu Éxito
              </h2>
              <p className="text-lg text-muted-foreground">
                Construimos relaciones a largo plazo y soluciones que escalan
                contigo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {values.map((value) => (
                <div key={value.title}>
                  {value.icon}
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
