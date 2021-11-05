import React from 'react'

export default function Day34() {
  return (
    <section>
      <img
        src={`${process.env.PUBLIC_URL}/assets/day3-4.png`}
        alt="Background Section 4"
      />

      <div className="text-box" id="day3">
        <span>Pemrograman dasar [2] :</span>
        <ol>
          <li>Perulangan</li>
          <li>Array</li>
          <li>Subprogram (fungsi dan prosedur)</li>
        </ol>
        Link Rekaman :{' '}
        <a
          href="https://drive.google.com/drive/folders/1g4ggrsrInweKLRyq8OLzOFmPOblgkjba?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Klik disini
        </a>
      </div>

      <h2 className="day-counter" id="day-counter-3">
        Day 3
      </h2>

      <div className="text-box" id="day4">
        <span>Fun Day :</span>
        <ol>
          <li>Kriptografi + game</li>
          <li>Keamanan Siber</li>
        </ol>
        Link Rekaman :{' '}
        <a
          href="https://drive.google.com/drive/folders/13hv7jl2i77wq-xB71D3h7IuLqT6oe6KK?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Klik disini
        </a>
      </div>

      <h2 className="day-counter" id="day-counter-4">
        Day 4
      </h2>
    </section>
  )
}
