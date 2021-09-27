import React from "react";

export default function Day56() {
  return (
    <section>
      <img
        src={`${process.env.PUBLIC_URL}/assets/day5-6.png`}
        alt="Background Section 5"
      />

      <div className="text-box" id="day5">
        <ol>
          <li>Web Development [1] : HTML</li>
          <li>UI/UX</li>
          <li>
            Web Development [2] :
            <br />
            <span>- CSS</span>
            <br />
            <span>- Javascript</span>
            <br />
          </li>
        </ol>
      </div>

      <h2 className="day-counter" id="day-counter-5">
        Day 5
      </h2>

      <div className="text-box" id="day6">
        <ol>
          <li>Game development</li>
          <li>AI</li>
        </ol>
      </div>

      <h2 className="day-counter" id="day-counter-6">
        Day 6
      </h2>
    </section>
  );
}
