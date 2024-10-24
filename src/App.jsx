import { useState } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"

function App() {
  const [coin, setCoin] = useState(0)

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
          <button className="bg-btn-primary px-7 py-3 rounded-l-xl font-bold text-color-primary">Available</button>
          <button className="bg-white px-7 py-3 rounded-r-xl font-bold text-color-primary">Selected (0)</button>
        </div>
      </div>
    </>
  )
}

export default App
