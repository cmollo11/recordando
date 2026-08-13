"use client"

import Link from "next/link"
import { useState } from "react"

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const cards = [
    { title: "Formaciones", text: "Aprender a canalizar y expandir", link: "#formaciones", img: "/images/formaciones.jpg", overlayTo: 0.6 },
    { title: "Terapias", text: "Volver al equilibrio interior", link: "#servicios", img: "/images/terapias.jpg", destacado: true, dorado: true, overlayTo: 0.6 },
    { title: "Retiros & Experiencias", text: "Explorar el mundo y tu energía", link: "#retiros", img: "/images/viajes.jpg", overlayTo: 0.4 },
  ]

  // En mobile, el orden de aparición ES la jerarquía (no hay "centro" que lo compense
  // como en desktop), así que Terapias va primera para que la primacía visual coincida
  // con la prioridad real del negocio.
  const terapiasCard = cards.find((c) => c.destacado)
  const otrasCards = cards.filter((c) => !c.destacado)
  const cardsMobile = terapiasCard ? [terapiasCard, ...otrasCards] : cards

  return (
    <section className="min-h-0 md:min-h-screen overflow-hidden md:flex md:flex-col" style={{ background: "#F5F2EC" }}>

      <header className="flex items-center justify-between px-6 py-6 relative z-50">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Recordando" className="h-10 w-auto" />
          <div className="flex flex-col">
            <h1 className="font-display text-2xl font-medium leading-tight" style={{ color: "#2C3E2D" }}>
              Recordando
            </h1>
            <span className="text-xs font-light tracking-wide" style={{ color: "#8FA888" }}>
              un espacio de Cristian Mollo
            </span>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full transition duration-300"
          style={{ border: "1px solid #8FA888", color: "#2C3E2D" }}
        >
          <div className="flex flex-col gap-1">
            <span className="block w-4 h-[1.5px]" style={{ background: "#2C3E2D" }}></span>
            <span className="block w-4 h-[1.5px]" style={{ background: "#2C3E2D" }}></span>
            <span className="block w-4 h-[1.5px]" style={{ background: "#2C3E2D" }}></span>
          </div>
          <span className="text-sm font-medium tracking-wide">Menú</span>
        </button>
      </header>

      <div
        className={`fixed inset-0 backdrop-blur-lg text-white flex flex-col justify-center items-center transition-all duration-500 z-100
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ background: "rgba(44, 62, 45, 0.92)" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full transition"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <span className="text-white text-xl">✕</span>
        </button>

        <nav className="flex flex-col items-center gap-8 text-2xl font-light">
          <Link href="#servicios" onClick={() => setMenuOpen(false)} style={{ color: "#C9A96E" }}>Terapias</Link>
          <Link href="#testimonios" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Testimonios</Link>
          <Link href="#formaciones" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Formaciones</Link>
          <Link href="#retiros" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Retiros</Link>
          <Link href="#sobre-mi" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Sobre mí</Link>
        </nav>
      </div>

      {/* MOBILE — 3 cards verticales full width, Terapias primera (orden = jerarquía en mobile) */}
      <div className="md:hidden flex flex-col gap-4 px-6 pb-10">
        {cardsMobile.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative overflow-hidden rounded-2xl group"
            style={{
              height: "180px",
              border: item.destacado ? "1px solid #C9A96E" : "none",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, rgba(44,62,45,0.15) 0%, rgba(44,62,45,${item.overlayTo}) 100%)` }}
            />
            <div className="relative h-full flex justify-between items-end p-4 text-white">
              <div>
                <h2
                  className="font-display mb-1"
                  style={{
                    color: item.dorado ? "#C9A96E" : "#F5F2EC",
                    fontSize: item.destacado ? "22px" : "20px",
                  }}
                >
                  {item.title}
                </h2>
                <p className="text-sm opacity-80">{item.text}</p>
              </div>
              <span
                aria-label={`Explorar ${item.title}`}
                className="shrink-0 text-xl"
                style={{ color: item.dorado ? "#C9A96E" : "#F5F2EC" }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* DESKTOP — 3 cards en fila, misma altura, Terapias más ancha con acento dorado */}
      <div className="hidden md:flex items-stretch gap-6 px-6 pb-10 md:flex-1">
        {cards.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative overflow-hidden rounded-2xl group"
            style={{
              minHeight: "420px",
              flex: item.destacado ? "1.3" : "1",
              border: item.destacado ? "1px solid #C9A96E" : "none",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, rgba(44,62,45,0.15) 0%, rgba(44,62,45,${item.overlayTo}) 100%)` }}
            />
            <div className="relative h-full flex justify-between items-end p-6">
              <div>
                <h2
                  className="font-display mb-1"
                  style={{
                    color: item.dorado ? "#C9A96E" : "#F5F2EC",
                    fontSize: item.destacado ? "28px" : "20px",
                  }}
                >
                  {item.title}
                </h2>
                <p className="text-sm opacity-80 text-white">{item.text}</p>
              </div>
              <span
                aria-label={`Explorar ${item.title}`}
                className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: item.dorado ? "#C9A96E" : "#F5F2EC" }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
