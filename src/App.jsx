import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Players from "./components/Players"
import SelectedPlayers from "./components/SelectedPlayers"
import Newsletter from "./components/Newsletter"

function App() {
  const [coin, setCoin] = useState(0)
  const [activeBtn, setActiveBtn] = useState('available')
  const [selectedPlayers, serSelectedPlayers] = useState([])
  const [players, setPlayers] = useState([])
  useEffect(() => {
    fetch("./players.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  function handelFreeCredit() {
    setCoin(coin + 2000000)
  };

  const handelChoosePlayer = (playerData) => {
    const isExist = selectedPlayers.find(player => player.playerId === playerData.playerId)
    if (!isExist) {
      if (selectedPlayers.length < 6) {
        if (playerData.biddingPrice < coin) {
          setCoin(coin - playerData.biddingPrice)
          const choosePlayer = [...selectedPlayers, playerData]
          serSelectedPlayers(choosePlayer)
        } else {
          alert("your not Amount")
        }
      }
      else {
        alert("You no more Add")
      }
    } else {
      alert("already Added")
    }
  }

  const handelDelate = (userId) => {
    const remainingPlayer = selectedPlayers.filter(player => player.playerId !== userId)
    serSelectedPlayers(remainingPlayer)
  }

  const handelAddMore = () => {
    console.log('click add more btn');
  }
  return (
    <>
      <NavBar coins={coin}></NavBar>
      <Banner handelFreeCredit={handelFreeCredit}></Banner>

      <div className="flex max-sm:flex-col max-sm:gap-8 w-11/12 mx-auto justify-between items-center mb-8">
        <div>
          <h2 className="text-color-primary text-3xl font-bold">{
            activeBtn === 'available' ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`
          }</h2>
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
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {
        activeBtn === 'available' ? <Players
          players={players}
          handelChoosePlayer={handelChoosePlayer}></Players> : <SelectedPlayers
            handelAddMore={handelAddMore}
            selectedPlayers={selectedPlayers}
            handelDelate={handelDelate}></SelectedPlayers>
      }

      <Newsletter></Newsletter>
    </>
  )
}

export default App
