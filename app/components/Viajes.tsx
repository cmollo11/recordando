"use client"

import Link from "next/link"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

type StatProps = {
  end: number
  suffix?: string
  label: string
}

function Stat({ end, suffix = "", label }: StatProps) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p
        className="font-display text-4xl font-light"
        style={{ color: "#C9A96E" }}
      >
        {inView ? <CountUp end={end} duration={5} /> : 0}
        {suffix}
      </p>
      <p className="text-sm mt-2" style={{ color: "#8FA888" }}>
        {label}
      </p>
    </div>
  )
}

export default function Viajes() {
  return (
    <section
      id="viajes"
      className="relative min-h-screen flex items-center justify-center text-white py-24 md:py-32"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/viajes.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26, 43, 27, 0.75)" }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2
          className="font-display text-5xl md:text-7xl font-light mb-10 md:mb-12 tracking-tight"
          style={{ color: "#C9A96E" }}
        >
          Viajes con Alma
        </h2>

        <p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed"
          style={{ color: "#E8E0D0" }}
        >
          Experiencias transformadoras para reconectar con tu esencia.
        </p>

        {/* Contadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <Stat end={15} suffix="+" label="Años de experiencia" />
          <Stat end={29} label="Países explorados" />
          <Stat end={150} suffix="+" label="Viajeros conectados" />
        </div>

        {/* CTA */}
        <Link
          href="/viajes"
          className="inline-block px-10 py-4 rounded-xl text-lg font-medium transition mt-4 md:mt-6"
          style={{ background: "#C9A96E", color: "#1a2b1b" }}
        >
          Explorar experiencias
        </Link>
      </div>
    </section>
  )
}