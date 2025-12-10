import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data";
import { Code } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Documentación</h1>
                        <p className="text-lg text-muted-foreground">
                            Bienvenido a la documentación de Soft WareHouse AI. Aquí encontrarás guías básicas para empezar a utilizar nuestros servicios.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Business Products */}
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Nuestros Servicios</h2>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {products.map((product) => (
                                    <Card key={product.id}>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2"><Code /> {product.title}</CardTitle>
                                            <CardDescription>Pasos básicos de implementación</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                                            <p>1. <strong>Contratación:</strong> Ponte en contacto con nuestro equipo de ventas para contratar el plan que mejor se adapte a ti.</p>
                                            <p>2. <strong>Configuración:</strong> Recibirás las credenciales y el acceso a nuestra plataforma.</p>
                                            <p>3. <strong>Integración:</strong> Usa nuestro snippet de código o API para integrar el {product.title} en tu web o sistema.</p>
                                            <p>4. <strong>Personalización:</strong> Ajusta los flujos de conversación y la apariencia desde nuestro panel de control.</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
