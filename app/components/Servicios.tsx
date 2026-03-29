"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

type Servicio = {
  titulo: string
  quees: string
  descripcion: string
  beneficios: string[]
  duracion: string
  ideal: string
  whatsapp: string
  imagen: string
}

function ServicioCard({ servicio, onClick, delay }: { servicio: Servicio; onClick: () => void; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="relative flex flex-col justify-between p-4 md:p-6 rounded-2xl text-center cursor-pointer overflow-hidden"
      style={{
        minHeight: "200px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${servicio.imagen})`,
          transition: "transform 0.7s ease",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "rgba(44, 62, 45, 0.82)" }}
      />
      <div className="relative z-10">
        <h3 className="font-display text-xl md:text-2xl font-medium mb-3" style={{ color: "#F5F2EC" }}>
          {servicio.titulo}
        </h3>
        <p className="text-sm mb-4" style={{ color: "#8FA888" }}>
          {servicio.descripcion}
        </p>
        <p className="text-sm mb-4" style={{ color: "#8FA888" }}>⏱ {servicio.duracion}</p>
      </div>
      <span className="relative z-10 inline-flex items-center justify-center gap-2 text-sm font-medium" style={{ color: "#fff" }}>
        Ver más →
      </span>
    </div>
  )
}

export default function Servicios() {
  const [modalAbierto, setModalAbierto] = useState<Servicio | null>(null)

  const servicios: Servicio[] = [
    {
      titulo: "Reiki Ryoho Usui",
      descripcion: "Armonización profunda de tu campo energético.",
      imagen: "/images/terapias.jpg",
      quees: "Este encuentro se desarrolla en tres etapas: comenzamos con una meditación guiada, luego recibís un mensaje de los ángeles y finalmente la canalización de energía vital del universo.",
      beneficios: ["Liberar bloqueos", "Calmar la ansiedad", "Armonizar tu energía", "Ganar claridad emocional", "Volver al presente"],
      duracion: "60 minutos aprox.",
      ideal: "Ideal si estás atravesando estrés, ansiedad o necesitás volver a tu eje.",
      whatsapp: "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20Reiki%20Ryoho%20Usui",
    },
    {
      titulo: "Registros Akáshicos",
      descripcion: "Mensajes del alma para comprender tus procesos.",
      imagen: "/images/registros.jpg",
      quees: "Con el permiso de los Maestros vamos a entrar en tus Registros. En ese viaje vas a recibir los mensajes que tus Guías sientan necesario revelarte en ese momento para tu evolución. Podrás recibir información de vidas pasadas, presente y potencialidades futuras. Todo mensaje es con amor y siempre va a ser para tu propio bien. Es un viaje muy armonioso que trae muchas respuestas y claridad en tu camino.",
      beneficios: ["Respuestas sobre situaciones actuales", "Comprensión de vínculos y procesos", "Información de tu historia y potencial futuro"],
      duracion: "60 minutos aprox.",
      ideal: "Ideal si buscás respuestas y claridad en un momento de decisión.",
      whatsapp: "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20Registros%20Ak%C3%A1shicos",
    },
  ]

  return (
    <section id="servicios" className="py-20 px-6" style={{ background: "#2C3E2D" }}>
      <div className="max-w-6xl mx-auto">

        <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-14" style={{ color: "#F5F2EC" }}>
          Experiencias para liberar y armonizar tu energía 
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {servicios.map((servicio, i) => (
            <ServicioCard
              key={servicio.titulo}
              servicio={servicio}
              onClick={() => setModalAbierto(servicio)}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Bloque de confianza */}
        <div className="rounded-2xl p-6 md:p-8 my-10 md:my-16" style={{ background: "#3d5c3e" }}>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-0">
            <div className="text-center py-3 md:py-0 md:px-12">
              <p className="font-display text-xl md:text-2xl font-medium mb-1" style={{ color: "#F5F2EC" }}>+10 años</p>
              <p className="text-sm" style={{ color: "#8FA888" }}>de experiencia</p>
            </div>
            <div className="md:hidden" style={{ height: "0.5px", background: "#4a6e4b", margin: "8px 24px" }} />
            <div className="hidden md:block" style={{ width: "0.5px", background: "#4a6e4b" }} />
            <div className="text-center py-3 md:py-0 md:px-12">
              <p className="font-display text-xl md:text-2xl font-medium mb-1" style={{ color: "#F5F2EC" }}>Sesiones 1:1</p>
              <p className="text-sm" style={{ color: "#8FA888" }}>enfoque humano y energético</p>
            </div>
            <div className="md:hidden" style={{ height: "0.5px", background: "#4a6e4b", margin: "8px 24px" }} />
            <div className="hidden md:block" style={{ width: "0.5px", background: "#4a6e4b" }} />
            <div className="text-center py-3 md:py-0 md:px-12">
              <p className="font-display text-xl md:text-2xl font-medium mb-1" style={{ color: "#F5F2EC" }}>100%</p>
              <p className="text-sm" style={{ color: "#8FA888" }}>personalizado</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2" style={{ color: "#F5F2EC" }}>
            No necesitás experiencia previa. Solo apertura para trabajar en vos.
          </p>
          <p className="text-sm" style={{ color: "#8FA888" }}>
            ¿Tenés dudas? Escribime antes de agendar.
          </p>
        </div>

      </div>

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

            <h3 className="font-display text-3xl font-medium mb-6" style={{ color: "#F5F2EC" }}>
              {modalAbierto.titulo}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8FA888" }}>
              {modalAbierto.quees}
            </p>
            <div className="mb-6">
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#8FA888" }}>
                La sesión te ayuda a
              </p>
              <ul className="space-y-2">
                {modalAbierto.beneficios.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-2" style={{ color: "#F5F2EC" }}>
                    <span style={{ color: "#8FA888" }}>✔</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm mb-2" style={{ color: "#8FA888" }}>⏱ {modalAbierto.duracion}</p>
            <p className="text-sm italic mb-8" style={{ color: "#8FA888" }}>{modalAbierto.ideal}</p>
            <button
              onClick={() => window.open(modalAbierto.whatsapp, "_blank")}
              className="w-full py-4 rounded-xl font-medium text-lg transition"
              style={{ background: "#7C6FCD", color: "#fff" }}
            >
              Agendar sesión
            </button>
          </div>
        </div>
      )}

    </section>
  )
}