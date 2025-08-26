import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoWeServe />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
