"use client";

import { IcGlobe, IcInsta, IcMail, IcWA } from "./icons";

type Props = { onOpenPopup: () => void };

export default function Footer({ onOpenPopup }: Props) {
  return (
    <footer className="ftr" id="contacto" data-screen-label="09 Footer">
      <div className="trama" aria-hidden="true" />
      <div className="container">
        <div className="big-row">
          <div className="big-mark">
            GYRA<em>.</em>
          </div>
          <div className="tag">
            Porque elegir mejor también puede ser delicioso. <br />
            Yogurt helado sin azúcar, <span className="repeat">para repetir</span>.
          </div>
        </div>

        <div className="links-row">
          <div className="col contact">
            <h5>Contacto</h5>
            <a href="https://mundogyra.com" target="_blank" rel="noreferrer">
              <span className="ic">
                <IcGlobe />
              </span>
              mundogyra.com
            </a>
            <a href="https://instagram.com/mundogyra" target="_blank" rel="noreferrer">
              <span className="ic">
                <IcInsta />
              </span>
              @mundogyra
            </a>
            <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
              <span className="ic">
                <IcWA />
              </span>
              WhatsApp
            </a>
            <a href="mailto:hola@mundogyra.com">
              <span className="ic">
                <IcMail />
              </span>
              hola@mundogyra.com
            </a>
          </div>
          <div className="col">
            <h5>Producto</h5>
            <a href="#sabores">Original</a>
            <a href="#sabores">Frutos rojos</a>
            <a href="#sabores">Próximamente</a>
          </div>
          <div className="col">
            <h5>Marca</h5>
            <a href="#sobre-nosotros">Sobre nosotros</a>
            <a href="#sobre-nosotros">Founders</a>
            <a href="#">Prensa</a>
          </div>
          <div className="col">
            <h5>Comercial</h5>
            <a href="#puntos">Puntos de venta</a>
            <a href="#sumate">Sumate (locales)</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpenPopup();
              }}
            >
              Club del freezer
            </a>
          </div>
        </div>

        <div className="bottom">
          <span>© 2026 GYRA · Buenos Aires, Argentina</span>
          <span>Hecho con criterio (y por médicos)</span>
        </div>
      </div>
    </footer>
  );
}
