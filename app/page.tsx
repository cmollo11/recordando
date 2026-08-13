import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";
import Formaciones from "./components/Formaciones";
import Retiros from "./components/Retiros";
import SobreMi from "./components/SobreMi";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Testimonios />
      <div style={{ borderTop: "0.5px solid #DDD6C8" }} />
      <Formaciones />
      <Retiros />
      <SobreMi />
      <div style={{ borderTop: "0.5px solid #DDD6C8" }} />
      <CTA />
      <Footer />
    </>
  );
}
