import { Fragment } from "react";
import { IcCheck } from "./icons";

const ITEMS = [
  "Sin azúcar",
  "10g proteína",
  "Ingredientes reales",
  "Sin TACC",
  "Apto kosher",
  "Testeado por terceros",
];

function Block({ k }: { k: string }) {
  return (
    <div className="item" key={k}>
      {ITEMS.map((t, i) => (
        <Fragment key={i}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
            <span className="check">
              <IcCheck />
            </span>
            {t}
          </span>
          {i < ITEMS.length - 1 && <span className="dot" />}
        </Fragment>
      ))}
      <span className="dot" />
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="mq" data-screen-label="03 Marquee">
      <div className="mq-track">
        <Block k="a" />
        <Block k="b" />
      </div>
    </div>
  );
}
