"use client";

import { useEffect, useRef, useState } from "react";
import { IcArrow, IcCheck, IcClose } from "./icons";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Popup({ open, onClose }: Props) {
  const [form, setForm] = useState({ nombre: "", email: "", cumple: "" });
  const [sent, setSent] = useState(false);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email.trim() && form.nombre.trim()) setSent(true);
  };

  return (
    <div
      className="modal-veil"
      ref={veilRef}
      onMouseDown={(e) => {
        if (e.target === veilRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      data-screen-label="00 Popup"
    >
      <div className="modal-shell">
        <div className="modal">
          <button className="close" onClick={onClose} aria-label="Cerrar">
            <IcClose />
          </button>

          {sent ? (
            <div className="ok-state">
              <div className="mark">
                <IcCheck width={22} height={22} />
              </div>
              <h4>Estás en la lista.</h4>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, maxWidth: "32ch" }}>
                Te mandamos un mail con tu código de descuento. Nos vemos en tu freezer.
              </p>
            </div>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="modal-badge-spin"
                src="/assets/gyra-badge-spinner.png"
                alt=""
                aria-hidden="true"
              />
              <div className="kicker">Solo para los primeros 100</div>
              <h3>
                Esto no lo compartimos con <em>cualquiera</em>.
              </h3>
              <p className="deck">
                Suscribite y descubrí los beneficios.{" "}
                <em>No deberíamos decirte esto</em>, pero es un gran descuento.
              </p>

              <form onSubmit={submit}>
                <div>
                  <label htmlFor="p-nombre">Nombre</label>
                  <input
                    id="p-nombre"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Cómo te llamás"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                </div>
                <div className="field-grid">
                  <div>
                    <label htmlFor="p-mail">Mail</label>
                    <input
                      id="p-mail"
                      type="email"
                      required
                      placeholder="vos@mundogyra.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="p-cumple">Cumpleaños</label>
                    <input
                      id="p-cumple"
                      type="text"
                      placeholder="dd / mm"
                      value={form.cumple}
                      onChange={(e) => setForm({ ...form, cumple: e.target.value })}
                    />
                  </div>
                </div>
                <button type="submit" className="submit">
                  Quiero mi descuento <IcArrow width={16} height={16} />
                </button>
                <button type="button" className="decline" onClick={onClose}>
                  No gracias, prefiero pagar más caro.
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
