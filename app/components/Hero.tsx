"use client"

import Link from "next/link"
import { useState } from "react"

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const cards = [
    { title: "Terapias", text: "Volver al equilibrio interior", link: "#servicios", img: "/images/terapias.jpg" },
    { title: "Viajes & Experiencias ", text: "Explorar el mundo y tu energía", link: "/viajes", img: "/images/viajes.jpg", dorado: true },
    { title: "Formaciones", text: "Aprender a canalizar y expandir", link: "#formaciones", img: "/images/formaciones.jpg" },
  ]

  return (
    <section className="min-h-0 md:min-h-screen overflow-hidden" style={{ background: "#F5F2EC" }}>

      <header className="flex items-center justify-between px-6 py-6 relative z-50">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="Recordando"
            className="h-10 w-auto"
          />
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
          <Link href="#sobre-mi" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Sobre mí</Link>
          <Link href="#servicios" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Terapias</Link>
          <Link href="#formaciones" onClick={() => setMenuOpen(false)} style={{ color: "#F5F2EC" }}>Formaciones</Link>
          <Link href="/viajes" onClick={() => setMenuOpen(false)} style={{ color: "#C9A96E" }}>Viajes</Link>
        </nav>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-4 px-6 pb-10">

        {/* Fila superior: Terapias + Formaciones */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Terapias", text: "Volver al equilibrio interior", link: "#servicios", img: "/images/terapias.jpg" },
            { title: "Formaciones", text: "Aprender a canalizar y expandir", link: "#formaciones", img: "/images/formaciones.jpg" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="relative overflow-hidden rounded-2xl h-48 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(44,62,45,0.35)" }} />
              <div className="relative h-full flex flex-col justify-end p-4 text-white">
                <h2 className="font-display text-lg mb-1" style={{ color: "#F5F2EC" }}>{item.title}</h2>
                <p className="text-xs opacity-80">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Fila inferior: Viajes destacado */}
        <Link
          href="/viajes"
          className="relative overflow-hidden rounded-2xl h-56 group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: "url(/images/viajes.jpg)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(44,62,45,0.35)" }} />
          <div className="relative h-full flex flex-col justify-end p-4 text-white">
            <h2 className="font-display text-xl mb-1" style={{ color: "#C9A96E" }}>Viajes</h2>
            <p className="text-sm opacity-80">Explorar el mundo y tu energía</p>
          </div>
        </Link>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-6 pb-10">
        {cards.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative overflow-hidden rounded-2xl h-105 group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(44,62,45,0.35)" }} />
            <div className="relative h-full flex flex-col justify-end p-6">
              <h2 className="font-display text-xl mb-1" style={{ color: item.dorado ? "#C9A96E" : "#F5F2EC" }}>{item.title}</h2>
              <p className="text-sm opacity-80 text-white">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
