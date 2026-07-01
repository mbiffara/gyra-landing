"use client";

import { useEffect, useState } from "react";
import { IcInsta } from "./icons";

type NavItem = { id: string; label: string; soon?: boolean };

const NAV: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "sobre-nosotros", label: "Sobre nosotros" },
  { id: "puntos", label: "Puntos de venta" },
  { id: "sumate", label: "Sumate" },
  { id: "recetas", label: "Recetas", soon: true },
  { id: "contacto", label: "Contacto" },
];

type Props = {
  onOpenPopup: () => void;
  active: string;
};

export default function Header({ onOpenPopup, active }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`} data-screen-label="01 Header">
      <div className="container">
        <div className="row">
          <a href="#inicio" className="brand" aria-label="GYRA">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/gyra-logotipo-positivo.svg" alt="GYRA" />
          </a>
          <nav>
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.soon ? "#" : `#${n.id}`}
                className={`${n.soon ? "soon" : ""} ${active === n.id ? "active" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="cta">
            <a
              className="ig"
              href="https://instagram.com/mundogyra"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IcInsta />
            </a>
            <button
              className="btn solid-celeste"
              onClick={onOpenPopup}
              style={{ padding: "12px 20px", fontSize: 13 }}
            >
              Quiero mi descuento
            </button>
            <button className="menu-btn" aria-label="Menu">
              <svg width="16" height="12" viewBox="0 0 16 12">
                <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
