import Title from "@/components/Title";
import About from "@/sections/About";
import Carousel from "@/sections/Carousel";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Title title="OVER ONS" />
        <About />
        <Carousel />
        <Title title="ONS WERK" />
        <Footer />
      </div>
    </main>
  );
}
