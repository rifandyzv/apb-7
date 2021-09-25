import './App.css'

function App() {
  return (
    <div className="App">
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

      <section>
        <div className="content">
          <h1>asdasd</h1>
          <p>asdw</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/awan.png`}
          alt="Background Section 2"
        />
      </section>
      <section>
        <div className="content">{/* content disini */}</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/day1-2.png`}
          alt="Background Section 3"
        />
      </section>
      <section>
        <div className="content">{/* content disini */}</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/day3-4.png`}
          alt="Background Section 4"
        />
      </section>
      <section>
        <div className="content">
          {/* <h1>asdasd</h1>
          <p>asdw</p>
          content disini */}
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/day5-6.png`}
          alt="Background Section 5"
        />
      </section>
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
