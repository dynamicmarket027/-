import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1 flex items-center justify-center pt-20">
                <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
                        Contacto
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        Si necesitas ayuda con uno de nuestros productos, aquí tienes cómo contactarnos.
                    </p>
                    
                    <div className="max-w-md mx-auto">
                        <div className="space-y-4 text-center">
                            <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                                <Mail className="w-5 h-5 text-primary"/> Email
                            </h3>
                            <div className="space-y-1 text-muted-foreground">
                                <a href="mailto:presidencia@softwarehouseai.com" className="text-lg text-foreground hover:text-primary transition-colors">
                                    presidencia@softwarehouseai.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
