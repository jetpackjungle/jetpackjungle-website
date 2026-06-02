import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { BrandWall } from "@/components/brand-wall";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <BrandWall />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
