"use client"

import { useState } from "react"
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
  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="font-display text-4xl font-light" style={{ color: "#C9A96E" }}>
        {inView && <CountUp end={end} duration={5} />}{suffix}
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
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${destino.imagen})` }}
      />
      <div className="absolute inset-0 group-hover:bg-black/40 transition duration-500" style={{ background: "rgba(26,43,27,0.55)" }} />
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
        style={{
          backgroundImage: "url('/images/otros_destinos.jpg')",
          transition: "transform 0.7s ease",
        }}
      />
      <div className="absolute inset-0 group-hover:opacity-90 transition duration-500" style={{ background: "rgba(26,43,27,0.78)" }} />
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
        transition: "opacity 0.7s ease, transform 0.7s ease, scale 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(0px) scale(1.02)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0px) scale(1)")}
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

  const whatsappCotizacion = "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20gustar%C3%ADa%20cotizar%20un%20viaje.%0ADestino%20(nacional%20%2F%20internacional)%3A%0ATipo%20de%20viaje%20(aventura%2C%20espiritual%2C%20relax)%3A%0ACantidad%20de%20personas%3A%0AFechas%20aproximadas%3A"
  const whatsappRetiros = "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20anotarme%20para%20los%20retiros%20y%20escapadas."

  return (
    <main style={{ background: "#F5F2EC" }}>

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-6 relative z-50" style={{ borderBottom: "0.5px solid #DDD6C8" }}>
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Recordando" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-medium leading-tight" style={{ color: "#2C3E2D" }}>Recordando</span>
            <span className="text-xs font-light tracking-wide" style={{ color: "#8FA888" }}>un espacio de Cristian Mollo</span>
          </div>
        </Link>
        <Link href="/" className="text-sm font-medium" style={{ color: "#2C3E2D" }}>← Volver</Link>
      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-white" style={{ minHeight: "60vh", background: "#1a2b1b" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/viajes.jpg')", opacity: 0.4 }} />
        <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-light mb-6 tracking-tight" style={{ color: "#C9A96E" }}>
            Viajes con Alma
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "#E8E0D0" }}>
            Donde el camino exterior revela tu mundo interior.
          </p>
        </div>
      </section>

      {/* DESTINOS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-light text-center mb-12" style={{ color: "#2C3E2D" }}>
            Principales destinos
          </h2>
          <div className="hidden md:grid grid-cols-3 gap-8">
            {destinos.map((destino) => (
              <DestinoCard key={destino.titulo} destino={destino} onClick={() => setModalAbierto(destino)} />
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-4">
            {destinos.map((destino) => (
              <DestinoCard key={destino.titulo} destino={destino} onClick={() => setModalAbierto(destino)} />
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <CotizacionCard whatsappCotizacion={whatsappCotizacion} />
        </div>
      </section>

      {/* CONTADORES */}
      <section className="py-16 px-6" style={{ background: "#2C3E2D" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <Stat end={15} suffix="+" label="Años de experiencia" />
          <Stat end={29} label="Países explorados" />
          <Stat end={150} suffix="+" label="Viajeros conectados" />
        </div>
      </section>

      {/* RETIROS */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <RetirosCard whatsappRetiros={whatsappRetiros} />
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="py-10 md:py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light" style={{ color: "#2C3E2D" }}>
            Viajar es la forma más antigua de transformarse
          </h2>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          style={{ background: "rgba(26, 43, 27, 0.85)", backdropFilter: "blur(6px)" }}
          onClick={() => setModalAbierto(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-8 relative"
            style={{
              background: "#2C3E2D",
              border: "0.5px solid #4a6e4b",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAbierto(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition"
              style={{ background: "#3d5c3e", color: "#8FA888" }}
            >
              ✕
            </button>
            <h3 className="font-display text-3xl font-medium mb-2" style={{ color: "#C9A96E" }}>
              {modalAbierto.titulo}
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#8FA888" }}>
              {modalAbierto.frase}
            </p>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#8FA888" }}>
              ¿Cómo querés viajar?
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {modalAbierto.modalidades.map((modalidad) => (
                <button
                  key={modalidad}
                  onClick={() => window.open(`${modalAbierto.whatsapp}${encodeURIComponent(modalidad)}`, "_blank")}
                  className="w-full py-3 px-6 rounded-xl text-sm font-medium text-left transition"
                  style={{ background: "#3d5c3e", color: "#F5F2EC" }}
                >
                  {modalidad} →
                </button>
              ))}
            </div>
            <p className="text-xs text-center" style={{ color: "#8FA888" }}>
              Te respondo a la brevedad con toda la información.
            </p>
          </div>
        </div>
      )}

    </main>
  )
}