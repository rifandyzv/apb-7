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
          src={`${process.env.PUBLIC_URL}/atas.png`}
          alt="Background section 1"
        />
      </section>

      <section>
        <div className="content">
          <h1>asdasd</h1>
          <p>asdw</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/awan.png`}
          alt="Background Section 2"
        />
      </section>
    </div>
  )
}

export default App
