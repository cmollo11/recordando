"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

type Destino = {
  titulo: string
  frase: string
  imagen: string
  modalidades: string[]
  whatsapp: string
}

function Stat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="font-display text-4xl font-light" style={{ color: "#C9A96E" }}>
        {mounted && inView ? <CountUp end={end} duration={5} /> : 0}{suffix}
      </p>
      <p className="text-sm mt-2" style={{ color: "#8FA888" }}>{label}</p>
    </div>
  )
}

function DestinoCard({ destino, onClick }: { destino: Destino; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{ height: "320px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${destino.imagen})` }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(26,43,27,0.55)" }} />
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="font-display text-2xl md:text-3xl mb-2" style={{ color: "#C9A96E" }}>{destino.titulo}</h3>
        <p className="text-sm mb-3" style={{ color: "#E8E0D0" }}>{destino.frase}</p>
        <span className="text-sm" style={{ color: "#C9A96E" }}>Ver modalidades →</span>
      </div>
    </div>
  )
}

function CotizacionCard({ whatsappCotizacion }: { whatsappCotizacion: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/otros_destinos.jpg')" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(26,43,27,0.78)" }} />
      <div className="relative z-10">
        <h3 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "#C9A96E" }}>
          ¿Tenés otro destino en mente?
        </h3>
        <p className="text-lg mb-8" style={{ color: "#E8E0D0" }}>
          Diseño tu experiencia a medida — nacional o internacional.
        </p>
        <button
          onClick={() => window.open(whatsappCotizacion, "_blank")}
          className="px-10 py-4 rounded-xl font-medium transition"
          style={{ background: "#C9A96E", color: "#1a2b1b" }}
        >
          Consultame →
        </button>
      </div>
    </div>
  )
}

function RetirosCard({ whatsappRetiros }: { whatsappRetiros: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="rounded-2xl p-10 text-center group cursor-pointer"
      style={{
        background: "#2C3E2D",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p className="text-xs mb-4 tracking-widest uppercase" style={{ color: "#C9A96E" }}>Próximamente</p>
      <h3 className="font-display text-3xl mb-4" style={{ color: "#F5F2EC" }}>
        Retiros & Escapadas
      </h3>
      <p className="mb-8" style={{ color: "#8FA888" }}>
        Experiencias diseñadas para la pausa, la presencia y la transformación personal.
      </p>
      <button
        onClick={() => window.open(whatsappRetiros, "_blank")}
        className="px-8 py-3 rounded-xl border transition"
        style={{ borderColor: "#C9A96E", color: "#C9A96E" }}
      >
        Quiero anotarme
      </button>
    </div>
  )
}

export default function ViajesPage() {
  const [modalAbierto, setModalAbierto] = useState<Destino | null>(null)

  const destinos: Destino[] = [
    {
      titulo: "Perú",
      frase: "Naturaleza, energía y misterios en un mismo portal",
      imagen: "/images/peru.jpg",
      modalidades: ["Salida grupal con guía desde Bs. As.", "Viaje a medida"],
      whatsapp: "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20el%20viaje%20a%20Per%C3%BA.%20%0AModalidad%20de%20inter%C3%A9s%3A",
    },
    {
      titulo: "Turquía",
      frase: "Entre historia y espíritu, tu propio equilibrio",
      imagen: "/images/turquia.jpg",
      modalidades: ["Salida grupal con guía desde Bs. As.", "Salida grupal sin guía", "Viaje a medida"],
      whatsapp: "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20el%20viaje%20a%20Turqu%C3%ADa.%20%0AModalidad%20de%20inter%C3%A9s%3A",
    },
    {
      titulo: "Egipto",
      frase: "Sabiduría ancestral para iniciar tu transformación",
      imagen: "/images/egipto.jpg",
      modalidades: ["Salida grupal con guía desde Bs. As.", "Salida grupal sin guía", "Viaje a medida"],
      whatsapp: "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20el%20viaje%20a%20Egipto.%20%0AModalidad%20de%20inter%C3%A9s%3A",
    },
  ]

  const whatsappCotizacion = "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20gustar%C3%ADa%20cotizar%20un%20viaje."
  const whatsappRetiros = "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20anotarme%20para%20los%20retiros."

  return (
    <main style={{ background: "#F5F2EC" }}>
      {/* resto queda igual */}
      <Footer />
    </main>
  )
}
