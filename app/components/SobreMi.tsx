"use client"

import { useState, useEffect } from "react"

export default function SobreMi() {
  const fotos = [
    "/images/sobre-mi-1.jpg",
    "/images/sobre-mi-2.jpg",
    "/images/sobre-mi-3.jpg",
    "/images/sobre-mi-4.jpg",
    "/images/sobre-mi-5.jpg",
    "/images/sobre-mi-6.jpg",
    "/images/sobre-mi-7.jpg",
    "/images/sobre-mi-8.jpg",
    "/images/sobre-mi-9.jpg",
    "/images/sobre-mi-10.jpg",
    "/images/sobre-mi-11.jpg",
    "/images/sobre-mi-12.jpg",
    "/images/sobre-mi-13.jpg",
  ]

  const [fotoActual, setFotoActual] = useState(0)
  const [expandido, setExpandido] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActual((prev) => (prev + 1) % fotos.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  const carrusel = (
    <div
      className="relative w-full h-full md:rounded-2xl md:overflow-hidden md:border"
      style={{ borderColor: "#DDD6C8" }}
    >
      {fotos.map((foto, i) => (
        <img
          key={i}
          src={foto}
          alt={`Foto ${i + 1}`}
          className="absolute inset-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000"
          style={{ opacity: i === fotoActual ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setFotoActual(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{ background: i === fotoActual ? "#F5F2EC" : "rgba(245,242,236,0.4)" }}
          />
        ))}
      </div>
    </div>
  )

  const texto = (
    <div className="flex-1">
      <h2 className="font-display text-3xl md:text-4xl font-light mb-2 leading-tight" style={{ color: "#2C3E2D" }}>
        Mi camino
      </h2>

      {/* Byline */}
      <p className="font-display text-lg font-medium mb-1" style={{ color: "#2C3E2D" }}>
        Cristian Mollo
      </p>
      <p className="text-sm mb-6" style={{ color: "#8FA888" }}>
        Terapeuta holístico · Licenciado en Turismo
      </p>

      {/* Resumen corto */}
      <p className="text-lg leading-relaxed mb-4" style={{ color: "#5C7A58" }}>
        Del turismo a lo espiritual: hoy acompaño procesos de conexión y expansión, integrando lo energético con lo humano.
      </p>

      {!expandido && (
        <button
          onClick={() => setExpandido(true)}
          className="text-sm font-medium mb-2 inline-flex items-center gap-1 transition hover:opacity-70"
          style={{ color: "#2C3E2D" }}
        >
          Leer más →
        </button>
      )}

      {expandido && (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: "#5C7A58" }}>
            Mi camino no fue lineal. Durante años trabajé en turismo, pero sentía que había algo más… algo más
            profundo. Con el tiempo, ese llamado se hizo claro: comprendí que el verdadero viaje es hacia adentro.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#5C7A58" }}>
            Desde ahí dejé de buscar experiencias vacías, y empecé a crear espacios que transforman. Cada sesión,
            cada formación y cada viaje que comparto nace de ese mismo lugar: la conciencia, la presencia y el alma.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#5C7A58" }}>
            Por eso no niego mi pasado como profesional del turismo — lo abrazo, y me expando desde otra
            perspectiva. Hoy ambos caminos son uno solo: viajar y transformarse.
          </p>
          <p className="text-lg leading-relaxed font-medium" style={{ color: "#2C3E2D" }}>
            ¿Me acompañás?
          </p>
          <button
            onClick={() => setExpandido(false)}
            className="text-sm font-medium inline-flex items-center gap-1 transition hover:opacity-70"
            style={{ color: "#8FA888" }}
          >
            Leer menos ↑
          </button>
        </div>
      )}
    </div>
  )

  return (
    <section id="sobre-mi" className="pt-8 pb-16 md:py-16" style={{ background: "#F5F2EC" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* MOBILE: título → texto → carrusel */}
        <div className="md:hidden mb-12">
          {texto}
          <div className="mt-8 w-full" style={{ height: "400px" }}>
            {carrusel}
          </div>
        </div>

        {/* DESKTOP: carrusel + texto lado a lado, carrusel se estira al alto del texto */}
        <div className="hidden md:flex gap-16 items-stretch mb-12">
          <div className="w-80 shrink-0 self-stretch">
            {carrusel}
          </div>
          {texto}
        </div>

        {/* Formas de acompañarte — línea compacta, Terapias al centro con acento dorado */}
        <div className="pt-16 text-center" style={{ borderTop: "0.5px solid #DDD6C8" }}>
          <p className="text-base mb-4" style={{ color: "#5C7A58" }}>
            ¿Con cuál empezamos?
          </p>
          <div className="flex flex-wrap justify-center items-baseline gap-3">
            <a
              href="#formaciones"
              className="font-display text-lg transition hover:opacity-70"
              style={{ color: "#2C3E2D" }}
            >
              Formaciones
            </a>
            <span style={{ color: "#DDD6C8" }}>·</span>
            <a
              href="#servicios"
              className="font-display text-2xl font-medium transition hover:opacity-70"
              style={{ color: "#C9A96E" }}
            >
              Terapias
            </a>
            <span style={{ color: "#DDD6C8" }}>·</span>
            <a
              href="#retiros"
              className="font-display text-lg transition hover:opacity-70"
              style={{ color: "#2C3E2D" }}
            >
              Retiros
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
