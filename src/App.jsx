import { useState } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Players from "./components/Players"
import SelectedPlayers from "./components/SelectedPlayers"

function App() {
  const [coin, setCoin] = useState(0)
  const [activeBtn, setActiveBtn] = useState('available')

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
            className={`px-7 py-3 rounded-l-xl font-bold border-2 border-solid border-color-finely/10 ${activeBtn === "available" ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`} onClick={() => setActiveBtn("available")}>
            Available
          </button>
          <button
            className={`px-7 py-3 rounded-r-xl font-bold border-2 border-solid border-color-finely/10 ${activeBtn === "selected" ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`}
            onClick={() => setActiveBtn("selected")}>
            Selected (0)
          </button>
        </div>
      </div>

      {
        activeBtn === 'available' ? <Players></Players> : <SelectedPlayers></SelectedPlayers>
      }
    </>
  )
}

export default App
