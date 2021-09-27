import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Day9 from "./components/Day9";
import Day78 from "./components/Day78";
import Day56 from "./components/Day56";
import Day34 from "./components/Day34";

function App() {
  return (
    <div className="App">
      {/* Home */}
      <Home />

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
      <Day34 />
      {/* Day 5 - Day 6 */}
      <Day56 />

      <Day78 />
      <Day9 />
      <Footer />
    </div>
  );
}

export default App;
