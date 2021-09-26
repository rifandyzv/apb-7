import './App.css'

function App() {
  return (
    <div className="App">
      {/* Home */}
      <section>
        <div className="content">
          <h1>Tes</h1>
          <p>Haii</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/atas_polos.png`}
          alt="Background section 1"
        />
      </section>

      {/* Apa itu APB */}
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

      {/* Day 1 - Day 2 */}
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
        </div>

        <h2 className="day-counter" id="day-counter-2">
          Day 2
        </h2>

        <img
          src={`${process.env.PUBLIC_URL}/assets/day1-2.png`}
          alt="Background Section 3"
        />
      </section>

      {/* Day 3 - Day 4 */}
      <section id="section4">
        <img
          src={`${process.env.PUBLIC_URL}/assets/day3-4.png`}
          alt="Background Section 4"
        />

        <div className="text-box" id="day3">
          <span>Pemrograman dasar [2] :</span>
          <br />
          <span>1. Perulangan</span>
          <br />
          <span>2. Array</span>
          <br />
          <span>3. Subprogram (fungsi dan prosedur)</span>
        </div>

        <h2 className="day-counter" id="day-counter-3">
          Day 3
        </h2>

        <div className="text-box" id="day4">
          <span>Fun Day :</span>
          <br />
          <span>1. Kriptografi + game</span>
          <br />
          <span>2. Keamanan Siber</span>
          <br />
        </div>

        <h2 className="day-counter" id="day-counter-4">
          Day 4
        </h2>
      </section>

      {/* Day 5 - Day 6 */}
      <section id="section5">
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

      {/* Day 7 - Day 8 */}
      <section>
        <div className="content">
          {/* <h1>asdasd</h1>
          <p>asdw</p>
          content disini */}
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/day7-8.png`}
          alt="Background Section 6"
        />
      </section>

      {/* Day 9 - bawah*/}
      <section>
        <div className="content">
          {/* <h1>asdasd</h1>
          <p>asdw</p>
          content disini */}
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/day-9.png`}
          alt="Background Section 7"
        />
      </section>
    </div>
  )
}

export default App
