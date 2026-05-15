"use client";

import { useState } from "react";
import { IcArrow, IcSearch } from "./icons";

type Punto = {
  id: number;
  nombre: string;
  barrio: string;
  calle: string;
  dist: string;
  x: number;
  y: number;
  type: "dietética" | "mercado" | "almacén";
};

const PDV: Punto[] = [
  { id: 1, nombre: "Tienda Verde",     barrio: "Palermo",            calle: "Honduras 4850",            dist: "0.4 km", x: 28, y: 32, type: "dietética" },
  { id: 2, nombre: "Naturalia",        barrio: "Palermo Soho",       calle: "El Salvador 4720",         dist: "0.7 km", x: 33, y: 26, type: "dietética" },
  { id: 3, nombre: "Mercado Bonpland", barrio: "Palermo Hollywood",  calle: "Bonpland 1660",            dist: "1.1 km", x: 24, y: 22, type: "mercado" },
  { id: 4, nombre: "La Vidriera",      barrio: "Villa Crespo",       calle: "Av. Corrientes 5200",      dist: "1.8 km", x: 35, y: 45, type: "dietética" },
  { id: 5, nombre: "Granix Soho",      barrio: "Recoleta",           calle: "Ayacucho 1280",            dist: "2.4 km", x: 52, y: 50, type: "dietética" },
  { id: 6, nombre: "El Almacén",       barrio: "Belgrano",           calle: "Cabildo 1990",             dist: "3.6 km", x: 16, y: 16, type: "almacén" },
  { id: 7, nombre: "Saludable Co.",    barrio: "Núñez",              calle: "Av. del Libertador 7100",  dist: "5.2 km", x: 12, y: 8,  type: "dietética" },
  { id: 8, nombre: "Mercat Caballito", barrio: "Caballito",          calle: "Rivadavia 5040",           dist: "4.4 km", x: 44, y: 60, type: "mercado" },
  { id: 9, nombre: "Buena Vibra",      barrio: "Colegiales",         calle: "Federico Lacroze 3380",    dist: "2.9 km", x: 26, y: 18, type: "dietética" },
];

const FILTERS: [string, string][] = [
  ["todos", "Todos"],
  ["dietética", "Dietéticas"],
  ["mercado", "Mercados"],
  ["almacén", "Almacenes"],
];

export default function PuntosDeVenta() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("todos");
  const [active, setActive] = useState<number | null>(null);

  const filtered = PDV.filter((p) => {
    const okQ = !q || `${p.nombre} ${p.barrio} ${p.calle}`.toLowerCase().includes(q.toLowerCase());
    const okF = filter === "todos" || p.type === filter;
    return okQ && okF;
  });
  const activePin = filtered.find((p) => p.id === active) || filtered[0];

  return (
    <section className="puntos" id="puntos" data-screen-label="07 Puntos de Venta">
      <div className="container">
        <div className="head">
          <span className="eb">Puntos de venta</span>
          <h2>
            No estamos en todos lados. <em>Estamos donde tiene sentido.</em>
          </h2>
          <p>
            Elegimos los puntos de venta con criterio. Si querés que lleguemos a tu barrio,{" "}
            <a href="#sumate" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
              escribinos y lo vemos
            </a>
            .
          </p>
        </div>

        <div className="locator">
          <div className="panel">
            <div className="search">
              <input
                type="text"
                placeholder="Buscá por barrio, calle o nombre"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <span className="ic">
                <IcSearch />
              </span>
            </div>
            <div className="filters">
              {FILTERS.map(([k, l]) => (
                <button key={k} className={filter === k ? "on" : ""} onClick={() => setFilter(k)} type="button">
                  {l}
                </button>
              ))}
            </div>
            <div className="results">
              {filtered.length === 0 && (
                <div style={{ padding: "24px 8px", fontStyle: "italic", opacity: 0.7, fontSize: 14 }}>
                  No encontramos nada por ahí. Pedí que lleguemos a tu barrio.
                </div>
              )}
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className={`result ${active === p.id ? "active" : ""}`}
                  onMouseEnter={() => setActive(p.id)}
                  onClick={() => setActive(p.id)}
                >
                  <span className="pin">{p.id}</span>
                  <div>
                    <div className="nm">{p.nombre}</div>
                    <div className="ad">
                      {p.calle} · {p.barrio}
                    </div>
                  </div>
                  <div className="dist">{p.dist}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="map">
            <div className="grid-bg" aria-hidden="true" />
            <div className="river" aria-hidden="true" />
            <div className="river-lbl">Río de la Plata</div>
            <div className="ba-lbl">Buenos Aires · CABA</div>

            {filtered.map((p) => (
              <div
                key={p.id}
                className={`pin ${activePin && p.id === activePin.id ? "active" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onClick={() => setActive(p.id)}
                title={p.nombre}
              >
                <span className="pin-inner">{p.id}</span>
              </div>
            ))}

            {activePin && (
              <div
                className="tooltip"
                style={{ left: `${activePin.x}%`, top: `${activePin.y}%` }}
              >
                <strong>{activePin.nombre}</strong>
                {activePin.calle} · {activePin.barrio}
              </div>
            )}
          </div>
        </div>

        <div className="ask">
          <div className="txt">¿Querés que lleguemos a tu barrio?</div>
          <a
            href="#sumate"
            className="btn solid-azul"
            style={{ background: "var(--gyra-azul)", color: "var(--gyra-crema)" }}
          >
            Pedinos un punto <IcArrow width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
