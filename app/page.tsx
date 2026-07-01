"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Popup from "./components/Popup";
import PuntosDeVenta from "./components/PuntosDeVenta";
import Sabores from "./components/Sabores";
import SobreNosotros from "./components/SobreNosotros";
import Sumate from "./components/Sumate";

const SECTION_IDS = ["inicio", "productos", "sobre-nosotros", "puntos", "sumate"] as const;

export default function Page() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    if (sessionStorage.getItem("gyraPopupSeen")) return;
    const t = setTimeout(() => {
      setPopupOpen(true);
      sessionStorage.setItem("gyraPopupSeen", "1");
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= y) {
          setActive(SECTION_IDS[i]);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header onOpenPopup={() => setPopupOpen(true)} active={active} />
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <Hero />
      <Marquee />
      <Sabores />
      <SobreNosotros />
      <PuntosDeVenta />
      <Sumate />
      <Footer onOpenPopup={() => setPopupOpen(true)} />
    </>
  );
}
