
import PropTypes from 'prop-types'

const SelectedPlayers = ({ selectedPlayers, handelDelate, handelAddMore }) => {
    return (
        <div className="w-11/12 mx-auto min-h-96 mb-[300px] flex flex-col gap-8">
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    handelDelate={handelDelate}></SelectedPlayer>)
            }

            <button onClick={handelAddMore} className=" btn text-color-primary font-bold py-[14px] px-5 bg-btn-primary rounded-xl outline outline-offset-4 outline-btn-primary">Add More Player</button>
        </div>
    );
};

function SelectedPlayer({ selectedPlayer, handelDelate }) {
    const { image, name, battingType, biddingPrice } = selectedPlayer
    return (
        <div className='flex items-center justify-between p-6 rounded-2xl' style={{ border: "1px solid rgba(19, 19, 19, 0.1)" }}>
            <div className='flex gap-6'>
                <div>
                    <img className='w-20 h-20 rounded-2xl' src={image} alt="" />
                </div>
                <div className='flex flex-col justify-between'>
                    <h2 className='text-color-primary font-bold text-2xl'>{name}</h2>
                    <p className='text-color-finely font-semibold'>{battingType}</p>
                    <p className='text-color-finely font-semibold'>Price: {biddingPrice}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handelDelate(selectedPlayer.playerId)}><i className="fa-solid fa-trash-can text-red-500 text-xl"></i></button>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handelDelate: PropTypes.func.isRequired,
    handelAddMore: PropTypes.func.isRequired
}
SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handelDelate: PropTypes.func.isRequired
}
export default SelectedPlayers;
