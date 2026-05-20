"use client";

import { Fragment, useState } from "react";
import { IcArrow, IcCheck } from "./icons";

type FlavorProps = {
  tone: "original" | "frutos";
  title: string;
  desc: string;
  specs: string[];
  benefits: string[];
  nutrition: [string, string][];
  signoSrc: string;
  proteinClaim: string;
};

function FlavorCard({ tone, title, desc, specs, benefits, nutrition, signoSrc, proteinClaim }: FlavorProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`flavor ${tone}${open ? " open" : ""}`}>
      <div className="stamp" aria-hidden="true">
        <b>{proteinClaim}</b>
        <i>proteína</i>
      </div>

      <div className="top-row">
        <div>
          <div className="pill-row">
            <span className="pill">0g azúcar añadida</span>
            <span className="pill b">Pote 150g</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 18,
          marginTop: 0,
          alignItems: "center",
        }}
      >
        <div>
          <h3>{title}</h3>
          <p className="desc">{desc}</p>
          <div className="specs">
            {specs.map((s, i) => (
              <Fragment key={i}>
                <span>{s}</span>
                {i < specs.length - 1 && <span className="sep">·</span>}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="pot-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={signoSrc} alt="" />
        </div>
      </div>

      <div className="btn-row">
        <button
          className="toggle-benefits"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          type="button"
        >
          {open ? "Cerrar" : "Por qué vas a querer repetirlo"}
          <span className="chev">↓</span>
        </button>
      </div>

      <div className="benefits">
        <div className="benefits-inner">
          <div className="lab">Por qué vas a querer repetirlo</div>
          <ul>
            {benefits.map((b, i) => (
              <li key={i}>
                <span className="bullet">
                  <IcCheck width={12} height={12} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="nutrition">
            <div className="nut-head">
              <span>Tabla nutricional</span>
              <span style={{ opacity: 0.7 }}>por pote · 150g</span>
            </div>
            <table>
              <tbody>
                {nutrition.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button className="btn cta-final solid-azul" type="button">
        Quiero el mío <IcArrow width={14} height={14} />
      </button>
    </article>
  );
}

export default function Sabores() {
  return (
    <section className="sabores" id="sabores" data-screen-label="04 Sabores">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eb rosa">Sabores · Elegí el tuyo</span>
            <h2>
              Dos sabores. <em>Sin nada que sobre.</em>
            </h2>
          </div>
          <p className="lead">
            Arrancamos con dos sabores que tardamos un año en ajustar. Hacé click en cada uno y mirá por qué los vas a querer repetir.
          </p>
        </div>

        <div className="flavor-grid">
          <FlavorCard
            tone="original"
            title="El Original."
            desc="Sin nada que sobre. Sin nada que falte. Así de simple es hacer algo bien."
            specs={["188 kcal", "13g proteína", "0g azúcar añadida", "Pote 150g"]}
            benefits={[
              "Cremoso de verdad — textura perfecta",
              "Sin azúcar añadida, sin endulzantes raros",
              "Alto en proteína — 13g por pote",
              "Hecho con yogurt griego real",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "188 kcal"],
              ["Proteínas", "13 g"],
              ["Hidratos de carbono", "11 g"],
              ["— de los cuales azúcares", "9 g (de la leche)"],
              ["— azúcar añadida", "0 g"],
              ["Grasas totales", "9 g"],
              ["— grasas saturadas", "5 g"],
              ["Sodio", "85 mg"],
            ]}
            signoSrc="/assets/original.png"
            proteinClaim="13g"
          />

          <FlavorCard
            tone="frutos"
            title="Explosión de frutos rojos."
            desc="Empezás con uno, terminás pensando en el próximo. Eso es exactamente lo que buscábamos."
            specs={["0g azúcar añadida", "Pote 150g", "Fruta real"]}
            benefits={[
              "Intenso y frutal sin ser artificial",
              "Sin azúcar añadida — la fruta hace el trabajo",
              "Cremoso de verdad — textura yogurtería",
              "Hecho con frutos rojos reales (frutilla, frambuesa, arándano)",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "172 kcal"],
              ["Proteínas", "11 g"],
              ["Hidratos de carbono", "13 g"],
              ["— de los cuales azúcares", "11 g (de la fruta)"],
              ["— azúcar añadida", "0 g"],
              ["Grasas totales", "8 g"],
              ["— grasas saturadas", "4.5 g"],
              ["Sodio", "78 mg"],
            ]}
            signoSrc="/assets/frutos.png"
            proteinClaim="11g"
          />
        </div>
      </div>
    </section>
  );
}
