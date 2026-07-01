"use client";

import { useState } from "react";
import { IcArrow, IcCheck } from "./icons";

const PERKS = [
  "Margen para el local — y producto que rota",
  "Material de comunicación pensado para tu vidriera",
  "Acompañamiento real, no solo un mail de bienvenida",
  "Primer pedido sin riesgo: si no se vende, lo retiramos",
];

export default function Sumate() {
  const [form, setForm] = useState({ local: "", nombre: "", contacto: "", barrio: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.local.trim() || !form.contacto.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "sumate", ...form }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setError("No pudimos enviar tu mensaje. Probá de nuevo en un momento.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="sumate" id="sumate" data-screen-label="08 Sumate">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="g" src="/assets/gyra-signo-color-3.svg" alt="" aria-hidden="true" />
      <div className="container">
        <div className="grid">
          <div>
            <span className="eb azul">Sumate · Para locales</span>
            <h2>
              El yogurt helado que tus clientes todavía no saben que <em>quieren</em>.
            </h2>
            <p className="sub">
              No trabajamos con cualquiera. Buscamos locales que entiendan a su cliente y quieran ofrecerle algo que todavía no existe en su barrio. Hablemos.
            </p>
            <div className="perks">
              {PERKS.map((p, i) => (
                <div className="perk" key={i}>
                  <span className="b">
                    <IcCheck />
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <form className="sumate-form" onSubmit={submit}>
            {sent ? (
              <div className="sent">
                Gracias. Te respondemos en menos de 48hs.
                <br />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    opacity: 0.8,
                    fontStyle: "normal",
                    display: "inline-block",
                    marginTop: 8,
                  }}
                >
                  Nos vemos pronto en tu local.
                </span>
              </div>
            ) : (
              <>
                <div>
                  <label className="lab" htmlFor="s-local">
                    Nombre del local
                  </label>
                  <input
                    id="s-local"
                    type="text"
                    placeholder="Ej. Tienda Verde"
                    value={form.local}
                    onChange={(e) => setForm({ ...form, local: e.target.value })}
                  />
                </div>
                <div className="row2">
                  <div>
                    <label className="lab" htmlFor="s-nombre">
                      Tu nombre
                    </label>
                    <input
                      id="s-nombre"
                      type="text"
                      placeholder="Cómo te llamás"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="lab" htmlFor="s-barrio">
                      Barrio
                    </label>
                    <input
                      id="s-barrio"
                      type="text"
                      placeholder="Ej. Palermo"
                      value={form.barrio}
                      onChange={(e) => setForm({ ...form, barrio: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="lab" htmlFor="s-contacto">
                    WhatsApp o mail
                  </label>
                  <input
                    id="s-contacto"
                    type="text"
                    placeholder="+54 11 0000 0000 · o vos@local.com"
                    value={form.contacto}
                    onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                  />
                </div>
                <button type="submit" className="submit" disabled={sending}>
                  {sending ? "Enviando…" : "Quiero sumarme"} <IcArrow width={16} height={16} />
                </button>
                {error && (
                  <p style={{ color: "#B00020", fontSize: 13, margin: "4px 0 0" }}>{error}</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
