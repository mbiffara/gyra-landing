export default function SobreNosotros() {
  return (
    <section className="about" id="sobre-nosotros" data-screen-label="06 Sobre Nosotros">
      <div className="container">
        <div className="manifest">
          <span className="eb rosa">Sobre nosotros</span>
          <h2>
            Lo rico y lo que te hace bien. <em>Por fin, juntos.</em>
          </h2>
          <p className="deck">
            GYRA existe para acompañarte en ese momento del día en que elegís algo mejor.
          </p>

          <div className="body">
            <div>
              <p>
                Durante mucho tiempo, elegir bien significaba resignar algo. El sabor, la textura, el placer de repetir. <strong>Nosotros no lo aceptamos.</strong>
              </p>
              <p>
                Creemos que lo que comés puede ser increíblemente rico y hacerte bien al mismo tiempo. Que disfrutar y cuidarse no son opuestos. Que cada cucharada puede ser exactamente lo que querés, <em>sin letra chica y sin ingredientes que no entendés.</em>
              </p>
              <p>
                Por eso trabajamos con médicos, ingenieros de alimentos y heladeros expertos que entendieron exactamente lo que buscábamos. Cada ingrediente fue elegido con criterio y cada decisión tiene un respaldo real.
              </p>
            </div>
            <div>
              <div className="pull">
                Nada está puesto <em>al azar</em>.
              </div>
              <p style={{ marginTop: 24, opacity: 0.8, fontSize: 14, fontStyle: "italic" }}>
                Porque elegir mejor también puede ser delicioso.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-divider" />
      </div>

      <div className="container">
        <div className="founders-block">
          <div className="sec-eb">La historia detrás de Gyra</div>
          <h3>Empezaron como socios. Terminaron casados.</h3>

          <div className="founders">
            <div className="founder tone-celeste">
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/founder-cindy.jpg" alt="Cindy Niemetz" />
                <div className="photo-tag">Cindy</div>
              </div>
              <div className="info">
                <h4 className="name">Cindy Niemetz</h4>
                <div className="role">Co-fundadora &amp; CMO</div>
                <p>
                  Cindy siempre supo que iba a emprender. Lo que nunca imaginó es que sería con su marido.
                </p>
                <p>
                  Lleva años construyendo marcas para otros con una obsesión clara: que lo que se comunica sea real, esté alineado con el producto, y no mienta. Hace deporte, le gusta comer sano y siempre buscó algo que le hiciera bien sin resignar el placer. Esa curiosidad que la define fue la que encendió todo.
                </p>
              </div>
            </div>

            <div className="founder tone-rosa">
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/founder-fede.jpg" alt="Federico Jovedjati" />
                <div className="photo-tag">Fede</div>
              </div>
              <div className="info">
                <h4 className="name">Federico Jovedjati</h4>
                <div className="role">Co-fundador · MD</div>
                <p>
                  Fede es médico. Su trabajo es ayudar a las personas a vivir mejor, a encontrar mejores elecciones, a entender lo que el cuerpo necesita de verdad. Y en su vida personal, es fanático del helado.
                </p>
                <p>
                  Alguien que sabe exactamente lo que debería comer — y lo que realmente quiere comer. Luego de un año de ensayos junto a médicos, ingenieros de alimentos y heladeros expertos, GYRA encontró exactamente lo que buscaba.
                </p>
              </div>
            </div>
          </div>

          <div className="founder-closer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="g" src="/assets/gyra-signo-negativo.svg" alt="" aria-hidden="true" />
            <div className="copy">
              <blockquote className="closer-quote">
                <span className="qm">“</span>Un mundo mejor empieza con las pequeñas elecciones que repetimos todos los días. Queremos que Gyra sea una de ellas.<span className="qm">”</span>
              </blockquote>
              <div className="sig">Cindy &amp; Fede · Fundadores · Buenos Aires</div>
            </div>
            <div className="ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/founders-juntos.jpg" alt="Cindy y Fede" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
