"use client";

import { Fragment, useState } from "react";
import { IcArrow, IcCheck } from "./icons";

type FlavorProps = {
  tone: "original" | "frutos";
  title: string;
  desc: string;
  specs: string[];
  benefits: string[];
  nutrition: [string, string, boolean?][];
  ingredients: string;
  signoSrc: string;
  proteinClaim: string;
};

function FlavorCard({ tone, title, desc, specs, benefits, nutrition, ingredients, signoSrc, proteinClaim }: FlavorProps) {
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
            <span className="pill b">Pote 190g</span>
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
              <span style={{ opacity: 0.7 }}>por pote · 190g</span>
            </div>
            <table>
              <tbody>
                {nutrition.map((row, i) => (
                  <tr key={i} className={row[2] ? "sub" : undefined}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ingredients">
              <b>Ingredientes:</b> {ingredients}
            </p>
            <p className="allergens">
              Contiene leche. Puede contener huevo, maní, almendras, avellanas, pistacho, sulfitos y derivados de soja.
            </p>
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
    <section className="productos" id="productos" data-screen-label="04 Productos">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eb rosa">Productos · Elegí el tuyo</span>
            <h2>
              Dos sabores. <em>Sin nada que sobre.</em>
            </h2>
          </div>
          <div className="lead">
            <p>Dos sabores que vas a querer tener siempre en tu freezer.</p>
            <p className="lead-sub">Elegí tu favorito. O enamorate de los dos.</p>
          </div>
        </div>

        <div className="flavor-grid">
          <FlavorCard
            tone="original"
            title="Sabor natural"
            desc="El clásico que siempre deja ganas de volver por más."
            specs={["238 kcal", "16g proteína", "0g azúcar añadida", "Pote 190g"]}
            benefits={[
              "Cremoso de verdad: textura perfecta",
              "Sin azúcar añadida, sin endulzantes raros",
              "Alto en proteína: 16g por pote",
              "Hecho con yogurt griego real",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "238 kcal"],
              ["Proteínas", "16 g"],
              ["Hidratos de carbono", "26 g"],
              ["azúcares totales", "1.6 g", true],
              ["azúcar añadida", "0 g", true],
              ["Grasas totales", "7.6 g"],
              ["grasas saturadas", "2.5 g", true],
              ["grasas trans", "0 g", true],
              ["Fibra alimentaria", "21 g"],
              ["Sodio", "28 mg"],
            ]}
            ingredients="Agua, yogur descremado en polvo, polidextrosa, inulina, ghee, concentrado proteico de suero de leche, sal, maltitol, stevia, goma guar, ácido láctico, aroma idéntico al natural."
            signoSrc="/assets/sabor-natural.png"
            proteinClaim="16g"
          />

          <FlavorCard
            tone="frutos"
            title="Frutos rojos"
            desc="Dulce, fresco y simplemente irresistible."
            specs={["209 kcal", "14g proteína", "0g azúcar añadida", "Pote 190g"]}
            benefits={[
              "Intenso y frutal sin ser artificial",
              "Sin azúcar añadida: la fruta hace el trabajo",
              "Cremoso de verdad: textura yogurtería",
              "Hecho con frutos rojos reales (frutilla, frambuesa, arándano)",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "209 kcal"],
              ["Proteínas", "14 g"],
              ["Hidratos de carbono", "23 g"],
              ["azúcares totales", "3.5 g", true],
              ["azúcar añadida", "0 g", true],
              ["Grasas totales", "6.6 g"],
              ["grasas saturadas", "2.2 g", true],
              ["grasas trans", "0 g", true],
              ["Fibra alimentaria", "19 g"],
              ["Sodio", "54 mg"],
            ]}
            ingredients="Agua, frambuesa, yogur descremado en polvo, polidextrosa, arándanos, inulina, ghee, concentrado proteico de suero de leche, frutilla, sal, maltitol, stevia, goma guar, ácido láctico, ácido cítrico, aroma idéntico al natural."
            signoSrc="/assets/frutos-rojos.png"
            proteinClaim="14g"
          />
        </div>
      </div>
    </section>
  );
}
