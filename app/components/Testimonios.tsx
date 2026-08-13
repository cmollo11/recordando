"use client"

import { useRef, useState } from "react"

type Testimonio = {
  imagen: string
  alt: string
}

const testimonios: Testimonio[] = [
  { imagen: "/images/testimonios/testimonio-1.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-2.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-3.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-4.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-5.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-6.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-7.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-8.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-9.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-10.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-11.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-12.png", alt: "Testimonio de una participante del programa" },
  { imagen: "/images/testimonios/testimonio-13.png", alt: "Testimonio de una participante del programa" },
]

const CANTIDAD_INICIAL_MOBILE = 3

export default function Testimonios() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mostrarTodosMobile, setMostrarTodosMobile] = useState(false)

  const scrollByAmount = (direction: 1 | -1) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollBy({ left: direction * container.clientWidth * 0.85, behavior: "smooth" })
  }

  const scrollToCard = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2
    let closestIndex = 0
    let closestDistance = Infinity
    Array.from(container.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect()
      const elCenter = rect.left + rect.width / 2
      const distance = Math.abs(elCenter - containerCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = i
      }
    })
    setActiveIndex(closestIndex)
  }

  const testimoniosVisiblesMobile = mostrarTodosMobile
    ? testimonios
    : testimonios.slice(0, CANTIDAD_INICIAL_MOBILE)

  return (
    <section id="testimonios" className="py-16 md:py-24 px-6" style={{ background: "#2C3E2D" }}>
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-3xl md:text-4xl font-light text-center mb-4"
          style={{ color: "#F5F2EC" }}
        >
          Lo que viven quienes atraviesan el proceso
        </h2>
        <p
          className="text-center mb-10 md:mb-16 max-w-xl mx-auto"
          style={{ color: "#8FA888" }}
        >
          Testimonios de amor
        </p>

        {/* MOBILE — tarjetas apiladas, 3 por defecto + "Ver más" */}
        <div className="md:hidden flex flex-col gap-4">
          {testimoniosVisiblesMobile.map((t) => (
            <div
              key={t.imagen}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#F5F2EC", border: "1px solid #4a6e4b" }}
            >
              <img src={t.imagen} alt={t.alt} className="w-full h-auto block" />
            </div>
          ))}

          {!mostrarTodosMobile && testimonios.length > CANTIDAD_INICIAL_MOBILE && (
            <button
              onClick={() => setMostrarTodosMobile(true)}
              className="mt-2 py-3 rounded-xl font-medium text-sm transition hover:opacity-80"
              style={{ border: "1px solid #C9A96E", color: "#C9A96E" }}
            >
              Ver más testimonios ↓
            </button>
          )}

          {mostrarTodosMobile && (
            <button
              onClick={() => setMostrarTodosMobile(false)}
              className="mt-2 py-3 rounded-xl font-medium text-sm transition hover:opacity-80"
              style={{ color: "#8FA888" }}
            >
              Ver menos ↑
            </button>
          )}
        </div>

        {/* DESKTOP — carrusel con flechas y dots */}
        <div className="hidden md:block relative">

          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Testimonio anterior"
            className="flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition hover:opacity-80"
            style={{ background: "#F5F2EC", color: "#2C3E2D" }}
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4"
          >
            {testimonios.map((t) => (
              <div
                key={t.imagen}
                className="flex-none snap-center rounded-2xl overflow-hidden flex items-center justify-center h-[440px]"
                style={{ background: "#F5F2EC", border: "1px solid #4a6e4b" }}
              >
                <img src={t.imagen} alt={t.alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Testimonio siguiente"
            className="flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition hover:opacity-80"
            style={{ background: "#F5F2EC", color: "#2C3E2D" }}
          >
            ›
          </button>

          <div className="flex justify-center flex-wrap gap-2 mt-4">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ background: i === activeIndex ? "#F5F2EC" : "rgba(245,242,236,0.3)" }}
              />
            ))}
          </div>

        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  )
}
