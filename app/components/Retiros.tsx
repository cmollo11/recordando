"use client"

export default function Retiros() {
  const whatsapp =
    "https://wa.me/5491159715854?text=Hola%20Cristian%2C%20quiero%20anotarme%20en%20la%20lista%20de%20espera%20de%20Retiros%20%26%20Escapadas"

  const instagramViajes = "https://www.instagram.com/fonte.viajes"

  return (
    <section id="retiros" className="py-16 md:py-24 px-6" style={{ background: "#2C3E2D" }}>
      <div className="max-w-3xl mx-auto">

        {/* Tarjeta "Próximamente" — Retiros & Escapadas (invertida: clara sobre fondo oscuro) */}
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ background: "#F5F2EC", border: "1px solid #C9A96E" }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#5C7A58" }}
          >
            Próximamente
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-light mb-4"
            style={{ color: "#2C3E2D" }}
          >
            Retiros & Escapadas
          </h2>
          <p
            className="text-base md:text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "#5C7A58" }}
          >
            Experiencias diseñadas para la pausa, la presencia y la transformación personal.
          </p>
          <button
            onClick={() => window.open(whatsapp, "_blank")}
            className="px-8 py-3 rounded-xl font-medium transition hover:opacity-85"
            style={{ background: "#C9A96E", color: "#2C3E2D" }}
          >
            Quiero anotarme
          </button>
        </div>

        {/* CTA sutil — Instagram de viajes (agente de viajes), texto claro sobre fondo oscuro */}
        <div className="text-center mt-10">
          <p
            className="font-display text-xl md:text-2xl font-light mb-3"
            style={{ color: "#F5F2EC" }}
          >
            Viajar es la forma más antigua de transformarse.
          </p>
          <p
            className="text-sm leading-relaxed mb-4 max-w-md mx-auto"
            style={{ color: "#8FA888" }}
          >
            Si hoy tenés ganas de armar tu próximo viaje, como agente de viajes te ayudo a hacerlo realidad.
          </p>
          <a
            href={instagramViajes}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium inline-flex items-center gap-1 transition hover:opacity-70"
            style={{ color: "#C9A96E" }}
          >
            Seguime en Instagram →
          </a>
        </div>

      </div>
    </section>
  )
}
