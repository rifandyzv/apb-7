import React from "react";

export default function Day78() {
  return (
    <section>
      <h2 className="day-counter" id="day-counter-7">
        Day 7
      </h2>
      <div className="text-box" id="day-7">
        Asistensi
      </div>
      <h2 className="day-counter" id="day-counter-8">
        Day 8
      </h2>
      <div className="text-box" id="day-8">
        <ol>
          <li>Presentasi Tubes</li>
          <li>Awarding Night</li>
          <li>Penutupan</li>
        </ol>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/day7-8.png`}
        alt="Background Section 6"
      />
    </section>
  );
}
