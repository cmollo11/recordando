import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import Formaciones from "./components/Formaciones";
import Viajes from "./components/Viajes";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Servicios />
      <Formaciones />
      <Viajes />
      <CTA />
      <Footer />
    </>
  );
}