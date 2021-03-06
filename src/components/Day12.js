import React from 'react'

export default function Day12() {
  return (
    <section id="section3">
      <h1 className="timeline">Timeline</h1>

      <div className="text-box" id="day1">
        <span>1. Overview Kegiatan</span>
        <br />
        <span>2. Intro to informatics</span>
        <br />
        <span>3. Keinformatikaan dalam kehidupan sehari-hari</span>
        <br />
        <span>4. Computational thinking</span>
        <br />
        Link Rekaman :{' '}
        <a
          href="https://drive.google.com/drive/folders/1hzhps_VK0uZX8LUWzfae_QProAdT01k7?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Klik disini
        </a>
      </div>

      <h2 className="day-counter" id="day-counter-1">
        Day 1
      </h2>

      <div className="text-box" id="day2">
        <span>Pemrograman dasar (1) :</span>
        <br />
        <span>1. Intro to logic</span>
        <br />
        <span>2. Input-output</span>
        <br />
        <span>3. Percabangan</span>
        <br />
        Link Rekaman :{' '}
        <a
          href="https://drive.google.com/drive/folders/15WrEsUhC-cnpVW0n1-4s_Fcz7VF8D2xi?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Klik disini
        </a>
      </div>

      <h2 className="day-counter" id="day-counter-2">
        Day 2
      </h2>

      <img
        src={`${process.env.PUBLIC_URL}/assets/day1-2.png`}
        alt="Background Section 3"
      />
    </section>
  )
}
