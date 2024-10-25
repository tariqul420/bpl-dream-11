import PropTypes from 'prop-types'

const Players = ({ players, handelChoosePlayer }) => {

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[300px]">
            {
                players.map(player => <Player 
                    key={player.playerId} 
                    player={player}
                    handelChoosePlayer={handelChoosePlayer}></Player>)
            }
        </div>
    );
};

function Player({ player , handelChoosePlayer}) {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player
    return (
        <div className='p-4 rounded-2xl' style={{ border: "1px solid rgba(19, 19, 19, 0.1)" }}>
            <img className='w-full h-[240px] rounded-2xl' src={image} alt="" />
            <h2 className='mt-5 text-color-primary font-black text-2xl'><i className="fa-solid fa-user"></i> {name}</h2>

            <div className='mt-6 flex items-center justify-between'>
                <p className='text-color-secondary font-bold'><i className="fa-solid fa-flag"></i> {country}</p>
                <p className='px-4 py-2 bg-color-finely/10 rounded-lg text-color-primary font-semibold'>{role}</p>
            </div>

            <hr className='my-6' />

            <h2 className='text-color-primary font-semibold text-lg'>Rating</h2>

            <div className='mt-6 flex items-center justify-between'>
                <p className='text-color-primary font-semibold text-lg'>{battingType}</p>
                <p className='text-color-secondary font-semibold text-lg'>{bowlingType}</p>
            </div>

            <div className='mt-6 flex items-center justify-between'>
                <p className='text-color-primary font-semibold text-lg'>Price: {biddingPrice}</p>
                <button onClick={() => handelChoosePlayer(player)} className='px-4 py-2 rounded-lg text-color-primary font-semibold text-lg cursor-pointer border-2 border-solid border-color-primary/10'>Choose Player</button>
            </div>
        </div>
    )
};


Players.propTypes = {
    players: PropTypes.array.isRequired,
    handelChoosePlayer: PropTypes.func.isRequired
}
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handelChoosePlayer: PropTypes.func.isRequired
}
export default Players;