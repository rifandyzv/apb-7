import React from 'react'

export default function ApbDesc() {
  return (
    <section id="section2">
      <div className="apb-desc">
        <h1 className="section2-header">Apa itu APB?</h1>
        <p>
          Program Aku Pasti Bisa/APB 7.0 adalah program edukasi yang berbasis
          pengajaran dan diadakan oleh Pengabdian Masyarakat HMIF ITB. Program
          ini merupakan program lanjutan dari "Aku Pasti Bisa 6.0" pada tahun
          2020.
          <br />
          <br />
          Tema yang diangkat pada aku pasti bisa tahun ini membawa tema
          pengenalan keinformatikaan kepada masyarakat umum.
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/awan.png`}
        alt="Background Section 2"
      />
    </section>
  )
}
