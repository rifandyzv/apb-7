import React from "react";

export default function Day56() {
  return (
    <section>
      <img
        src={`${process.env.PUBLIC_URL}/assets/day5-6.png`}
        alt="Background Section 5"
      />

      <div className="text-box" id="day5">
        <span>1. Web Development [1] : HTML</span>
        <br />
        <span>2. UI/UX</span>
        <br />
        <span>3. Web Development [2] :</span>
        <br />
        <span>- CSS</span>
        <br />
        <span>- Javascript</span>
        <br />
      </div>

      <h2 className="day-counter" id="day-counter-5">
        Day 5
      </h2>

      <div className="text-box" id="day6">
        <span>1. Game development</span>
        <br />
        <span>2. AI</span>
        <br />
      </div>

      <h2 className="day-counter" id="day-counter-6">
        Day 6
      </h2>
    </section>
  );
}
