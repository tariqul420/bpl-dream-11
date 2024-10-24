import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Players from "./components/Players"
import SelectedPlayers from "./components/SelectedPlayers"
import Newsletter from "./components/Newsletter"

function App() {
  const [coin, setCoin] = useState(0)
  const [activeBtn, setActiveBtn] = useState('available')
  const [players, setPlayers] = useState([])
  useEffect(() => {
    fetch("./players.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  function handelFreeCredit() {
    setCoin(coin + 60000)
  };

  return (
    <>
      <NavBar coins={coin}></NavBar>
      <Banner handelFreeCredit={handelFreeCredit}></Banner>

      <div className="flex w-11/12 mx-auto justify-between items-center mb-8">
        <div>
          <h2 className="text-color-primary text-3xl font-bold">Available Players</h2>
        </div>
        <div>
          <button
            className={`px-7 py-3 rounded-l-xl font-bold ${activeBtn === "available" ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`} onClick={() => setActiveBtn("available")} style={{
              borderLeft: "2px solid #1313131a",
              borderBottom: "2px solid #1313131a",
              borderTop: "2px solid #1313131a"
            }}>
            Available
          </button>
          <button
            className={`px-7 py-3 rounded-r-xl font-bold ${activeBtn === "selected" ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`}
            onClick={() => setActiveBtn("selected")} style={{
              borderRight: "2px solid #1313131a",
              borderBottom: "2px solid #1313131a",
              borderTop: "2px solid #1313131a"
            }}>
            Selected (0)
          </button>
        </div>
      </div>

      {
        activeBtn === 'available' ? <Players players={players}></Players> : <SelectedPlayers></SelectedPlayers>
      }

      <Newsletter></Newsletter>
    </>
  )
}

export default App
