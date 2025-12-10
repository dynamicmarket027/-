import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/app/sections/hero";
import ProductShowcase from "@/app/sections/products";
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper";
import FaqSection from "@/app/sections/faq";

export default function BusinessPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScrollAnimationWrapper>
          <ProductShowcase />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <FaqSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
}
