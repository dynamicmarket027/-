import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import placeholderImages from "@/lib/placeholder-images.json";
import Header from "@/components/header";
import Footer from "@/components/footer";

const founders = [
    {
      name: "Pablo",
      role: "CEO & CMO",
      description: "Estratega visionario con enfoque en innovación y crecimiento sostenible. Lidera la dirección general y la expansión de la marca, impulsando el posicionamiento de Soft Warehouse IA como referente en el desarrollo responsable de inteligencia artificial.",
      imageId: "founder-bot-1",
    },
    {
      name: "Carlos",
      role: "CTO",
      description: "Ingeniero experto en arquitectura de software e infraestructuras de IA. Dirige la investigación y desarrollo tecnológico, asegurando que cada solución esté respaldada por estándares de excelencia, seguridad y escalabilidad.",
      imageId: "founder-bot-2",
    },
    {
      name: "Óscar",
      role: "COO",
      description: "Especialista en operaciones y optimización de procesos. Su liderazgo operativo garantiza la eficiencia, la calidad del servicio y la implementación efectiva de cada proyecto, alineando la ejecución con nuestra visión estratégica.",
      imageId: "founder-bot-3",
    },
    {
      name: "Tomás",
      role: "CHRO & CFO",
      description: "Responsable del talento humano y la sostenibilidad financiera. Promueve una cultura organizacional basada en la transparencia, la cooperación y la formación continua, asegurando la gestión ética y el equilibrio económico de la compañía.",
      imageId: "founder-bot-4",
    },
];

export default function AboutUsPage() {
    const getImage = (id: string) => {
        return placeholderImages.placeholderImages.find((img) => img.id === id);
    };

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                <section id="about-us" className="py-16 md:py-24 bg-background pt-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Sobre Nosotros</h2>
                            <p className="text-lg text-muted-foreground">
                                En Soft Warehouse IA, somos un equipo de cuatro fundadores unidos por una misma visión: democratizar la inteligencia artificial y convertirla en una herramienta accesible, ética y transformadora para personas y organizaciones. Creemos que la tecnología debe servir al progreso humano, no sustituirlo. Por ello, nuestra misión es diseñar soluciones inteligentes que integren innovación, simplicidad y propósito.
                            </p>
                        </div>
                        
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Nuestro Equipo</h3>
                             <p className="text-lg text-muted-foreground">
                                Nuestro equipo combina liderazgo, experiencia técnica y una profunda vocación por el impacto social:
                             </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {founders.map((founder) => {
                               const image = getImage(founder.imageId);
                               return (
                                <Card key={founder.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden text-left bg-secondary/30">
                                   <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                                    {image && (
                                        <Image
                                        src={image.imageUrl}
                                        alt={`Bot avatar for ${founder.name}`}
                                        width={100}
                                        height={100}
                                        className="rounded-full border-4 border-primary/20 shrink-0"
                                        data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div>
                                        <h4 className="text-xl font-bold">{founder.name}</h4>
                                        <p className="text-sm text-primary font-semibold mb-2">{founder.role}</p>
                                        <p className="text-sm text-muted-foreground">{founder.description}</p>
                                    </div>
                                   </CardContent>
                                </Card>
                               );
                            })}
                        </div>
                        
                        <div className="text-center max-w-4xl mx-auto mt-16 space-y-4">
                            <p className="text-lg text-muted-foreground">
                                Nuestros valores fundamentales —accesibilidad, inclusión, simplicidad, innovación y ética— orientan cada decisión y acción que emprendemos. Son el cimiento de nuestro compromiso con clientes, colaboradores y sociedad.
                            </p>
                             <p className="text-lg text-muted-foreground">
                                A través de ellos, trabajamos para construir un ecosistema de inteligencia artificial centrado en las personas, donde la tecnología amplifica las capacidades humanas, fomenta la equidad y contribuye al desarrollo sostenible.
                             </p>
                             <p className="text-xl font-semibold text-foreground mt-4">
                                En Soft Warehouse IA, no solo desarrollamos soluciones tecnológicas: creamos puentes entre el conocimiento, la innovación y la humanidad.
                             </p>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
