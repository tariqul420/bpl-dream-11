
import logo from "../assets/logo.png"
import coin from "../assets/coin.png"
import PropTypes from 'prop-types'

const NavBar = ({ coins }) => {
    return (
        <div className="w-full sticky top-0 backdrop-blur-3xl z-[1000]">
            <div className="w-11/12 mx-auto my-6 flex items-center justify-between">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="flex gap-12 items-center">
                    <ul className="flex text-color-finely gap-12 max-sm:hidden">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#teams">Teams</a></li>
                        <li><a href="#">Schedules</a></li>
                    </ul>

                    <button className="flex items-center gap-4 text-color-primary py-4 px-5 rounded-[12px]" style={{ border: '1px solid rgba(19, 19, 19, 0.1)' }}>
                        <p className="font-black">{coins} Coin</p>
                        <img src={coin} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    coins: PropTypes.number.isRequired
}
export default NavBar;
