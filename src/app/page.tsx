import CallToActionSection from "@/components/CallToActionSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/footer";
import FutureFeaturesSection from "@/components/FutureFeaturesSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InterfacesSection from "@/components/InterfacesSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 gap-10 flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <InterfacesSection />
        <FutureFeaturesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}