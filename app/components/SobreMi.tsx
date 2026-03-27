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

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActual((prev) => (prev + 1) % fotos.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  const carrusel = (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ border: "0.5px solid #DDD6C8", height: "320px" }}>
      {fotos.map((foto, i) => (
        <img
          key={i}
          src={foto}
          alt={`Foto ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
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
      <h2 className="font-display text-3xl md:text-4xl font-light mb-8 leading-tight" style={{ color: "#2C3E2D" }}>
        Mi camino hasta acá
      </h2>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C7A58" }}>
        Hola, soy Cristian Mollo, licenciado en turismo y terapeuta holístico.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C7A58" }}>
        Mi camino no fue lineal.
        Durante años trabajé en turismo, pero sentía que había algo más… algo más profundo que el simple hecho de viajar.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C7A58" }}>
        Con el tiempo comprendí que el verdadero viaje es hacia adentro.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C7A58" }}>
        Hoy acompaño procesos de conexión y expansión, integrando lo energético con lo humano.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C7A58" }}>
        No creo en experiencias vacías.
        Creo en espacios que transforman.
      </p>
      <p className="text-lg leading-relaxed" style={{ color: "#5C7A58" }}>
        Cada sesión, cada formación y cada viaje que comparto nace desde ese lugar:
        la conciencia, la presencia y el alma.
      </p>
    </div>
  )

  return (
    <section id="sobre-mi" className="pt-8 pb-16 md:py-16" style={{ background: "#F5F2EC" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* MOBILE: título → texto → carrusel */}
        <div className="md:hidden mb-12">
          {texto}
          <div className="mt-8 w-full" style={{ height: "320px" }}>
            {carrusel}
          </div>
        </div>

        {/* DESKTOP: carrusel + texto lado a lado */}
        <div className="hidden md:flex gap-16 items-stretch mb-12">
          <div className="w-80 shrink-0">
            {carrusel}
          </div>
          {texto}
        </div>

        {/* Tres formas — igual en ambos */}
        <div className="pt-16" style={{ borderTop: "0.5px solid #DDD6C8" }}>
          <h3 className="font-display text-3xl font-light text-center mb-12" style={{ color: "#2C3E2D" }}>
            Formas de acompañarte
          </h3>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center px-4">
              <h4 className="font-display text-xl font-medium mb-3" style={{ color: "#2C3E2D" }}>Sesiones personales</h4>
              <p className="text-base leading-relaxed" style={{ color: "#5C7A58" }}>
                Sesiones individuales para desbloquear, ordenar y expandir tu proceso personal.
              </p>
              <a href="#servicios" className="inline-block mt-4 text-sm transition" style={{ color: "#2C3E2D" }}>
                Explorar sesiones →
              </a>
            </div>

            <div className="text-center px-4">
              <h4 className="font-display text-xl font-medium mb-3" style={{ color: "#2C3E2D" }}>Viajes & Experiencias</h4>
              <p className="text-base leading-relaxed" style={{ color: "#5C7A58" }}>
                Destinos y experiencias diseñadas para conectar conciencia y propósito.
              </p>
              <a href="/viajes" className="inline-block mt-4 text-sm transition" style={{ color: "#C9A96E" }}>
                Descubrir experiencias →
              </a>
            </div>

            <div className="text-center px-4">
              <h4 className="font-display text-xl font-medium mb-3" style={{ color: "#2C3E2D" }}>Formaciones</h4>
              <p className="text-base leading-relaxed" style={{ color: "#5C7A58" }}>
                Programas estructurados para quienes desean profundizar y profesionalizar su camino.
              </p>
              <a href="#formaciones" className="inline-block mt-4 text-sm transition" style={{ color: "#2C3E2D" }}>
                Ver programas →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}