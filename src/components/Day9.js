import React from "react";
import { FORM_LINK } from "../constants/links";

export default function Day9() {
  return (
    <section>
      <h2 className="day-counter" id="day-counter-9">
        Day 9
      </h2>
      <div className="text-box" id="day-9">
        <ol>
          <li>Presentasi Tubes</li>
          <li>Awarding Night</li>
          <li>Penutupan</li>
        </ol>
      </div>
      <div className="button-container bottom-daftar-btn">
        <a className="btn" href={FORM_LINK} target="_blank" rel="noreferrer">
          Daftar
        </a>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/day-9.png`}
        alt="Background Section 7"
      />
    </section>
  );
}
