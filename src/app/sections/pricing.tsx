"use client";

import { pricingPlans } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Precios Simples y Transparentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para escalar con tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "flex flex-col",
                plan.popular ? "border-primary ring-2 ring-primary shadow-2xl" : "shadow-lg"
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 right-5 bg-primary text-primary-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">{plan.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.priceDetail && (
                    <span className="text-muted-foreground">{plan.priceDetail}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button
                   asChild
                   className={cn("w-full", plan.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "")}
                   variant={plan.popular ? "default" : "outline"}
                 >
                   <Link href="/contactnocliente">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
