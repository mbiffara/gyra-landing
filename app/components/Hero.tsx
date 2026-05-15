import { IcArrow } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="inicio" data-screen-label="02 Hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="g-bg" src="/assets/gyra-signo-color-1.svg" alt="" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="grid">
          <div>
            <p className="lead-eb">
              Bienvenidos al mundo donde elegir mejor también es delicioso.
            </p>
            <h1>
              El yogurt <em>helado</em> que <span className="underline">siempre</span> quisiste tener en casa.
            </h1>
            <p className="sub">El sabor que querés, los ingredientes que merecés.</p>
            <p className="tiny">
              Hecho por médicos y heladeros expertos — para que disfrutes sin preocuparte.
            </p>
            <div className="ctas">
              <a href="#sabores" className="btn primary">
                Sabores <IcArrow width={14} height={14} />
              </a>
              <a href="#sobre-nosotros" className="btn outline-crema">
                Conocé más
              </a>
            </div>
          </div>

          <div className="claim-stack">
            <div className="claim">
              <span className="big">0g</span>
              <span className="lbl">Azúcar añadida</span>
            </div>
            <div className="claim">
              <span className="big">10g</span>
              <span className="lbl">Proteína por pote</span>
            </div>
            <div className="claim">
              <span className="big rosa">Real</span>
              <span className="lbl">Ingredientes que reconocés</span>
            </div>
            <div className="claim">
              <span className="big celeste">3°</span>
              <span className="lbl">Testeado por terceros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
