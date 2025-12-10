import Image from "next/image";
import { testimonials } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const getImage = (id: string) => {
    return placeholderImages.placeholderImages.find((img) => img.id === id);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Con la Confianza de Líderes de la Industria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones de IA están generando un impacto real en empresas como la tuya.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatar = getImage(testimonial.avatarId);
              const logo = getImage(testimonial.logoId);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <blockquote className="text-lg md:text-xl font-medium mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4 mb-4">
                          {avatar && (
                            <Image
                              src={avatar.imageUrl}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full"
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                        {logo && (
                          <div className="relative h-10 w-32 opacity-60">
                            <Image
                              src={logo.imageUrl}
                              alt={`${testimonial.company} logo`}
                              fill
                              className="object-contain"
                              data-ai-hint={logo.imageHint}
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
