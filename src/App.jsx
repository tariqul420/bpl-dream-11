import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";
import Newsletter from "./components/Newsletter";

function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showAvailablePlayers, setShowAvailablePlayers] = useState(true);

  useEffect(() => {
    fetch("./players.json")
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  function handelFreeCredit() {
    setCoin(coin + 5000000);
    toast.success("You received 5,000,000 coins!");
  }

  const handelChoosePlayer = (playerData) => {
    const isExist = selectedPlayers.find(player => player.playerId === playerData.playerId);

    if (!isExist) {
      if (selectedPlayers.length < 6) {
        if (playerData.biddingPrice <= coin) {
          setCoin(coin - playerData.biddingPrice);
          const choosePlayer = [...selectedPlayers, playerData];
          setSelectedPlayers(choosePlayer);
          toast.success(`${playerData.name} has been added!`);
        } else {
          toast.error("Not enough coins.");
        }
      } else {
        toast.warning("Maximum players selected.");
      }
    } else {
      toast.warning("Player already added.");
    }
  };

  const handelDelate = (userId) => {
    const remainingPlayer = selectedPlayers.filter(player => player.playerId !== userId);
    setSelectedPlayers(remainingPlayer);
    toast.info("Player removed.");
  };

  const handelAddMore = () => {
    setShowAvailablePlayers(!showAvailablePlayers);
  };

  return (
    <>
      <NavBar coins={coin}></NavBar>
      <Banner handelFreeCredit={handelFreeCredit}></Banner>

      <div className="flex max-sm:flex-col max-sm:gap-8 w-11/12 mx-auto justify-between items-center mb-8" id="teams">
        <div>
          <h2 className="text-color-primary text-3xl font-bold">{
            showAvailablePlayers ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`
          }</h2>
        </div>
        <div>
          <button
            className={`px-7 py-3 rounded-l-xl font-bold ${showAvailablePlayers ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`}
            onClick={() => setShowAvailablePlayers(true)} style={{
              borderLeft: "2px solid #1313131a",
              borderBottom: "2px solid #1313131a",
              borderTop: "2px solid #1313131a"
            }}>
            Available
          </button>
          <button
            className={`px-7 py-3 rounded-r-xl font-bold ${!showAvailablePlayers ? "bg-btn-primary text-color-primary" : "bg-white text-color-primary"}`}
            onClick={() => setShowAvailablePlayers(false)} style={{
              borderRight: "2px solid #1313131a",
              borderBottom: "2px solid #1313131a",
              borderTop: "2px solid #1313131a"
            }}>
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {
        showAvailablePlayers ?
          <Players players={players} handelChoosePlayer={handelChoosePlayer}></Players>
          :
          <SelectedPlayers handelAddMore={handelAddMore} selectedPlayers={selectedPlayers} handelDelate={handelDelate}></SelectedPlayers>
      }

      <Newsletter></Newsletter>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        toast appears
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;