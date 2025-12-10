import { products } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
      {children}
    </p>
  );
}

export default function ProductShowcase() {
  const getImage = (id: string) => {
    return placeholderImages.placeholderImages.find((img) => img.id === id);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-12">
          <SectionTitle>Un Abanico de Soluciones Tecnológicas</SectionTitle>
          <SectionSubtitle>
            Como tu socio tecnológico, te ofrecemos una gama completa de servicios para diseñar, desarrollar y optimizar tus sistemas, permitiéndote enfocarte en lo que realmente importa: tu negocio.
          </SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const image = getImage(product.imageId);
            return (
              <Card key={product.id} className="flex flex-col md:flex-row overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                {image && (
                  <div className="md:w-1/3 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <div className="flex flex-col md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="mb-6">{product.description}</CardDescription>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full" disabled={product.disabled}>
                      <Link href={product.disabled ? "#" : "/contact"}>{product.cta || 'Saber más'}</Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
