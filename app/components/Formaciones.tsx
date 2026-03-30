"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

type Opcion = {
  titulo: string
  descripcion: string
  precio: string
  incluye: string[]
  paraQuien: string
  href: string
  destacado?: boolean
}

function FormacionCard({ opcion, onClick }: { opcion: Opcion; onClick: () => void }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group flex flex-col justify-between p-4 md:p-6 rounded-2xl transition-all duration-700 text-center cursor-pointer"
      style={{
        background: "#2C3E2D",
        border: opcion.destacado ? "1px solid #C9A96E" : "0.5px solid #3d5c3e",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div>
        <h3
          className="font-display text-xl md:text-2xl font-medium mb-2"
          style={{ color: opcion.destacado ? "#C9A96E" : "#F5F2EC" }}
        >
          {opcion.titulo}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#8FA888" }}>
          {opcion.descripcion}
        </p>
      </div>
      <div className="mt-4 md:mt-8">
        <span
          className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
          style={{ color: opcion.destacado ? "#C9A96E" : "#F5F2EC" }}
        >
          Ver programa →
        </span>
      </div>
    </div>
  )
}

export default function Formaciones() {
  const [modalAbierto, setModalAbierto] = useState<Opcion | null>(null)

  const whatsapp = (programa: string) =>
    `https://wa.me/5491159715854?text=Hola%20Cristian%2C%20me%20interesa%20el%20programa%20${encodeURIComponent(programa)}`

  const opciones: Opcion[] = [
    {
      titulo: "Un Nivel",
      descripcion: "Comenzá tu camino en Reiki.",
      precio: "$ 65.000 ARS",
      paraQuien: "Para quienes quieren iniciar su camino en Reiki y aprender a canalizar energía desde cero. Ideal si sentís el llamado pero todavía no tenés experiencia.",
      incluye: [
        "Introducción al sistema Reiki Usui",
        "Técnicas de tratamiento",
        "Manual",
        "Clase grabada",
        "Material de apoyo",
        "Sintonización",
        "Certificado",
      ],
      href: "/formaciones/un-nivel",
    },
    {
      titulo: "Dos Niveles",
      descripcion: "Profundizá y expandí tu práctica.",
      precio: "$110.000 ARS",
      paraQuien: "Para quienes buscan integrar una práctica más profunda y potenciar su canalización.",
      incluye: [
        "Símbolos sagrados",
        "Símbolo de limpieza",
        "Tratamientos a distancia",
        "Profundización energética",
        "Manuales",
        "Clases grabadas",
        "Material de apoyo",
        "Sintonizaciones",
        "Certificados",
      ],
      href: "/formaciones/dos-niveles",
      destacado: true,
    },
    {
      titulo: "Maestría Completa",
      descripcion: "El camino integral hasta ser Maestro/a.",
      precio: "$200.000 ARS",
      paraQuien: "Una formación completa para quienes deseen recorrer todo el camino y acompañar a otros en su búsqueda.",
      incluye: [
        "Nivel 1, 2, 3 + Maestría",
        "Símbolos maestros",
        "Canalización con cristales",
        "Habilitación para enseñar e iniciar",
        "Manuales",
        "Clases grabadas",
        "Material de apoyo",
        "Sintonizaciones",
        "Certificados",
      ],
      href: "/formaciones/maestria",
    },
  ]

  return (
    <section id="formaciones" className="py-16 md:py-24 px-6" style={{ background: "#F5F2EC" }}>
      <div className="max-w-5xl mx-auto">

        <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-4" style={{ color: "#2C3E2D" }}>
          Formación en Reiki Ryoho Usui
        </h2>
        <p className="text-center mb-10 md:mb-16 max-w-xl mx-auto" style={{ color: "#5C7A58" }}>
          Tres formas de hacer tu camino. Elegí la que resuene hoy con vos.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {opciones.map((opcion) => (
            <FormacionCard
              key={opcion.titulo}
              opcion={opcion}
              onClick={() => setModalAbierto(opcion)}
            />
          ))}
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
            className="w-full max-w-lg rounded-2xl p-6 relative overflow-y-auto"
            style={{
              background: "#2C3E2D",
              border: "0.5px solid #4a6e4b",
              maxHeight: "90vh",
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
            <h3 className="font-display text-3xl font-medium mb-2" style={{ color: "#F5F2EC" }}>
              {modalAbierto.titulo}
            </h3>
            <p className="font-display text-2xl font-light mb-6" style={{ color: "#C9A96E" }}>
              {modalAbierto.precio}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8FA888" }}>
              {modalAbierto.paraQuien}
            </p>
            <div className="mb-6">
              <p className="text-xs font-medium mb-3 tracking-widest uppercase" style={{ color: "#8FA888" }}>
                Qué incluye
              </p>
              <ul className="space-y-2">
                {modalAbierto.incluye.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: "#F5F2EC" }}>
                    <span style={{ color: "#8FA888" }}>✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs italic mb-6" style={{ color: "#8FA888" }}>
              Cupos limitados — consultá disponibilidad.
            </p>
            <button
              onClick={() => window.open(whatsapp(modalAbierto.titulo), "_blank")}
              className="w-full py-4 rounded-xl font-medium text-lg transition"
              style={{ background: "#C9A96E", color: "#1a2b1b" }}
            >
              Quiero este programa
            </button>
          </div>
        </div>
      )}

    </section>
  )
}
