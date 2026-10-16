"use client";

import { useState } from "react";
import { IcArrow, IcSearch } from "./icons";

type Punto = {
  id: number;
  nombre: string;
  barrio: string;
  calle: string;
  // Posición aproximada en el mapa esquemático (%). Sin pin si queda fuera del mapa.
  x?: number;
  y?: number;
  url?: string;
  type: "dietética" | "mercado" | "almacén" | "online";
};

const PDV: Punto[] = [
  { id: 1,  nombre: "Selva Mercado",  barrio: "Las Cañitas",    calle: "Ortega y Gasset 1808",          x: 37, y: 42, type: "mercado" },
  { id: 2,  nombre: "Selva Mercado",  barrio: "Palermo",        calle: "Aráoz 2515",                    x: 50, y: 49, type: "mercado" },
  { id: 3,  nombre: "Selva Mercado",  barrio: "Recoleta",       calle: "Av. Pueyrredón 1887",           x: 57, y: 54, type: "mercado" },
  { id: 4,  nombre: "Selva Mercado",  barrio: "Chacarita",      calle: "Av. Álvarez Thomas 4",          x: 29, y: 48, type: "mercado" },
  { id: 5,  nombre: "Almazen",        barrio: "Las Cañitas",    calle: "Gorostiaga 1891",               x: 30, y: 35, type: "almacén" },
  { id: 6,  nombre: "Eco Despensa",   barrio: "Las Cañitas",    calle: "Migueletes 734",                x: 38, y: 33, type: "almacén" },
  { id: 7,  nombre: "Soho Borges",    barrio: "Palermo Soho",   calle: "Borges 1842",                   x: 38, y: 54, type: "almacén" },
  { id: 8,  nombre: "Jaial",          barrio: "Palermo",        calle: "Av. Scalabrini Ortiz 3306",     x: 44, y: 50, type: "dietética" },
  { id: 9,  nombre: "Jaial",          barrio: "Belgrano",       calle: "Moldes 2454",                   x: 18, y: 31, type: "dietética" },
  { id: 10, nombre: "Shafe Almacén",  barrio: "Belgrano",       calle: "Dragones 2000",                 x: 32, y: 25, type: "almacén" },
  { id: 11, nombre: "Quiero Natural", barrio: "Chacarita",      calle: "Av. Jorge Newbery 1667",        x: 20, y: 58, type: "dietética" },
  { id: 12, nombre: "Club Saludable", barrio: "Recoleta",       calle: "Av. Callao 834",                x: 60, y: 60, type: "dietética" },
  { id: 13, nombre: "Coquitos",       barrio: "San Nicolás",    calle: "Cerrito 204",                   x: 65, y: 67, type: "dietética" },
  { id: 14, nombre: "Angélica",       barrio: "Olivos",         calle: "Av. Maipú 3105",                x: 8, y: 9, type: "dietética" },
  { id: 15, nombre: "Eneldo Mercado Natural", barrio: "Pilar", calle: "R. Caamaño 1175, La Lonja",                    type: "mercado" },
  { id: 16, nombre: "E-Kosher",       barrio: "Envíos a domicilio", calle: "Tienda online", url: "https://ekosher.com.ar/", type: "online" },
];

const mapsUrl = (p: Punto) =>
  p.url ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.nombre}, ${p.calle}, ${p.barrio}, Buenos Aires`)}`;

const FILTERS: [string, string][] = [
  ["todos", "Todos"],
  ["dietética", "Dietéticas"],
  ["mercado", "Mercados"],
  ["almacén", "Almacenes"],
  ["online", "Online"],
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
  const pinned = filtered.filter((p) => p.x !== undefined && p.y !== undefined);
  const activePin = pinned.find((p) => p.id === active) || pinned[0];

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
                  <a className="dist" href={mapsUrl(p)} target="_blank" rel="noreferrer">
                    {p.type === "online" ? "Comprar" : "Ver mapa"}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="map">
            <div className="grid-bg" aria-hidden="true" />
            <div className="river" aria-hidden="true" />
            <div className="river-lbl">Río de la Plata</div>
            <div className="ba-lbl">Buenos Aires</div>

            {pinned.map((p) => (
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
              <div className="tooltip">
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
