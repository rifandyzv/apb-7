import './App.css'
import Home from './components/Home/Home'
import ApbDesc from './components/ApbDesc'
import Day12 from './components/Day12'
import Footer from './components/Footer'
import Day9 from './components/Day9'
import Day78 from './components/Day78'
import Day56 from './components/Day56'
import Day34 from './components/Day34'

function App() {
  return (
    <div className="App">
      {/* Home */}
      <Home />

      {/* Apa itu APB */}
      <ApbDesc />
      {/* Day 1 - Day 2 */}
      <Day12 />
      {/* Day 3 - Day 4 */}
      <Day34 />
      {/* Day 5 - Day 6 */}
      <Day56 />

      <Day78 />
      <Day9 />
      <Footer />
    </div>
  )
}

export default App
