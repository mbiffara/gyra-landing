"use client";

import { Fragment, useState } from "react";
import { IcArrow, IcCheck } from "./icons";

type FlavorProps = {
  tone: "original" | "frutos";
  title: string;
  desc: string;
  specs: string[];
  benefits: string[];
  nutrition: [string, string, string, boolean?][];
  ingredients: string;
  ingredientsNote?: string;
  signoSrc: string;
  proteinClaim: string;
  onOpenPopup: () => void;
};

function FlavorCard({ tone, title, desc, specs, benefits, nutrition, ingredients, ingredientsNote, signoSrc, proteinClaim, onOpenPopup }: FlavorProps) {
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
              <span style={{ opacity: 0.7 }}>porción 60g · 1 bocha</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th className="vd">%VD*</th>
                </tr>
              </thead>
              <tbody>
                {nutrition.map((row, i) => (
                  <tr key={i} className={row[3] ? "sub" : undefined}>
                    <td>{row[0]}</td>
                    <td className="val">{row[1]}</td>
                    <td className="vd">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="vd-note">
              (*) % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.
            </p>
            <p className="ingredients">
              <b>Ingredientes:</b> {ingredients}
            </p>
            {ingredientsNote && <p className="allergens">{ingredientsNote}</p>}
            <p className="allergens">
              Contiene leche. Puede contener huevo, maní, almendras, avellanas, pistacho, sulfitos y derivados de soja.
            </p>
          </div>
        </div>
      </div>

      <button className="btn cta-final solid-azul" type="button" onClick={onOpenPopup}>
        Quiero el mío <IcArrow width={14} height={14} />
      </button>
    </article>
  );
}

export default function Sabores({ onOpenPopup }: { onOpenPopup: () => void }) {
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
            specs={["Con prebióticos", "16g proteína", "0g azúcar añadida", "Pote 190g"]}
            benefits={[
              "Cremoso de verdad: textura perfecta",
              "Sin azúcar añadida, sin endulzantes raros",
              "Alto en proteína: 16g por pote",
              "Hecho con yogurt griego real",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "75 kcal = 314 kJ", "4%"],
              ["Carbohidratos", "8,3 g", "3%"],
              ["azúcares totales", "0,5 g", "", true],
              ["azúcares añadidos", "0 g", "", true],
              ["Proteínas", "5,0 g", "7%"],
              ["Grasas totales", "2,4 g", "4%"],
              ["grasas saturadas", "0,8 g", "4%", true],
              ["grasas trans", "0 g", "", true],
              ["Fibra alimentaria", "6,7 g", "27%"],
              ["Sodio", "8,8 mg", "0%"],
            ]}
            ingredients="Agua, yogur descremado en polvo*, polidextrosa, inulina, butteroil, concentrado proteico de suero de leche, sal, EDU: maltitol y stevia, EMU: INS 471, EST: goma guar, ACI: ácido láctico, ARO: idéntico al natural."
            ingredientsNote="(*) Aporta cantidades no significativas de azúcares."
            signoSrc="/assets/sabor-natural-pote.jpg"
            proteinClaim="16g"
            onOpenPopup={onOpenPopup}
          />

          <FlavorCard
            tone="frutos"
            title="Frutos rojos"
            desc="Dulce, fresco y simplemente irresistible."
            specs={["Con prebióticos", "14g proteína", "0g azúcar añadida", "Pote 190g"]}
            benefits={[
              "Intenso y frutal sin ser artificial",
              "Sin azúcar añadida: la fruta hace el trabajo",
              "Cremoso de verdad: textura yogurtería",
              "Hecho con frutos rojos reales (frutilla, frambuesa, arándano)",
              "Sin TACC · Apto kosher",
            ]}
            nutrition={[
              ["Valor energético", "66 kcal = 276 kJ", "3%"],
              ["Carbohidratos", "7,4 g", "2%"],
              ["azúcares totales", "1,1 g", "", true],
              ["azúcares añadidos", "0 g", "", true],
              ["Proteínas", "4,4 g", "6%"],
              ["Grasas totales", "2,1 g", "4%"],
              ["grasas saturadas", "0,7 g", "3%", true],
              ["grasas trans", "0 g", "", true],
              ["Fibra alimentaria", "5,9 g", "24%"],
              ["Sodio", "17 mg", "1%"],
            ]}
            ingredients="Agua, frambuesa, yogur descremado en polvo, polidextrosa, arándanos, inulina, butteroil, concentrado proteico de suero de leche, frutilla, sal, EDU: maltitol y stevia, EMU: INS 471, EST: goma guar, ACI: ácido láctico y ácido cítrico, ARO: idéntico al natural."
            signoSrc="/assets/frutos-rojos.png"
            proteinClaim="14g"
            onOpenPopup={onOpenPopup}
          />
        </div>
      </div>
    </section>
  );
}
