import LeadCapture from "@/app/sections/lead-capture";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BudgetRequest from "@/app/sections/budget-request";

export default function ContactNoClientePage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1 pt-20">
                <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Ponte en Contacto</h1>
                        <p className="text-lg text-muted-foreground">
                            Estamos aquí para ayudarte a impulsar tu negocio. Rellena el formulario que mejor se adapte a tus necesidades.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <div>
                            <LeadCapture />
                        </div>
                        <div>
                            <BudgetRequest />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
