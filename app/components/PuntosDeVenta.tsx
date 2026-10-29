"use client";

import { useState } from "react";
import { IcArrow, IcSearch } from "./icons";
import StoreMap, { type MapPoint } from "./StoreMap";

type Punto = {
  id: number;
  nombre: string;
  barrio: string;
  calle: string;
  // Sin coordenadas = sin pin (tienda online).
  lat?: number;
  lng?: number;
  url?: string;
  type: "dietética" | "mercado" | "almacén" | "online";
};

const PDV: Punto[] = [
  { id: 1,  nombre: "Selva Mercado",  barrio: "Las Cañitas",    calle: "Ortega y Gasset 1808",          lat: -34.5701, lng: -58.4324, type: "mercado" },
  { id: 2,  nombre: "Selva Mercado",  barrio: "Palermo",        calle: "Aráoz 2515",                    lat: -34.5856, lng: -58.4146, type: "mercado" },
  { id: 3,  nombre: "Selva Mercado",  barrio: "Recoleta",       calle: "Av. Pueyrredón 1887",           lat: -34.5894, lng: -58.3997, type: "mercado" },
  { id: 4,  nombre: "Selva Mercado",  barrio: "Chacarita",      calle: "Av. Álvarez Thomas 4",          lat: -34.5831, lng: -58.4446, type: "mercado" },
  { id: 5,  nombre: "Almazen",        barrio: "Las Cañitas",    calle: "Gorostiaga 1891",               lat: -34.5671, lng: -58.438, type: "almacén" },
  { id: 6,  nombre: "Eco Despensa",   barrio: "Las Cañitas",    calle: "Migueletes 734",                lat: -34.5669, lng: -58.4334, type: "almacén" },
  { id: 7,  nombre: "Soho Borges",    barrio: "Palermo Soho",   calle: "Borges 1842",                   lat: -34.587, lng: -58.4278, type: "almacén" },
  { id: 8,  nombre: "Jaial",          barrio: "Palermo",        calle: "Av. Scalabrini Ortiz 3306",     lat: -34.5894, lng: -58.4228, type: "dietética" },
  { id: 9,  nombre: "Jaial",          barrio: "Belgrano",       calle: "Moldes 2454",                   lat: -34.5604, lng: -58.4623, type: "dietética" },
  { id: 10, nombre: "Shafe Almacén",  barrio: "Belgrano",       calle: "Dragones 2000",                 lat: -34.5538, lng: -58.4402, type: "almacén" },
  { id: 11, nombre: "Quiero Natural", barrio: "Chacarita",      calle: "Av. Jorge Newbery 1667",        lat: -34.5964, lng: -58.459, type: "dietética" },
  { id: 12, nombre: "Club Saludable", barrio: "Recoleta",       calle: "Av. Callao 834",                lat: -34.5992, lng: -58.3931, type: "dietética" },
  { id: 13, nombre: "Coquitos",       barrio: "San Nicolás",    calle: "Cerrito 204",                   lat: -34.606, lng: -58.3822, type: "dietética" },
  { id: 14, nombre: "Angélica",       barrio: "Olivos",         calle: "Av. Maipú 3105",                lat: -34.5071, lng: -58.4925, type: "dietética" },
  { id: 15, nombre: "Eneldo Mercado Natural", barrio: "Pilar", calle: "R. Caamaño 1175, La Lonja", lat: -34.4508, lng: -58.8395, type: "mercado" },
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
  const [focus, setFocus] = useState<number | null>(null);

  const filtered = PDV.filter((p) => {
    const okQ = !q || `${p.nombre} ${p.barrio} ${p.calle}`.toLowerCase().includes(q.toLowerCase());
    const okF = filter === "todos" || p.type === filter;
    return okQ && okF;
  });
  const pinned = filtered.filter((p): p is Punto & MapPoint => p.lat !== undefined && p.lng !== undefined);
  const activePin = pinned.find((p) => p.id === active) || pinned[0];

  return (
    <section className="puntos" id="puntos" data-screen-label="07 Puntos de Venta">
      <div className="container">
        <div className="head">
          <span className="eb">Puntos de venta · Próximamente</span>
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
                  onClick={() => {
                    setActive(p.id);
                    setFocus(p.id);
                  }}
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
            <StoreMap points={pinned} activeId={activePin?.id} focusId={focus} onSelect={setActive} />

            <div className="soon">
              <b>Próximamente</b>
              <span>Te esperamos acá desde el lanzamiento</span>
            </div>

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
