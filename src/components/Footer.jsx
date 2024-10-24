import Logo from "../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className="flex flex-col items-center" style={{ background: "rgb(6, 9, 26)" }}>
            <img className="mt-[240px]" src={Logo} alt="" />

            <div className="flex justify-between w-11/12 mx-auto mt-16 mb-16 max-sm:flex-col max-sm:justify-center">
                <div className="">
                    <h3 className="text-white font-semibold text-lg">About Us</h3>
                    <p className="text-white/60 w-[18rem]">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                    <ul className="list-disc text-white/60 max-sm:ml-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg">About Us</h3>
                    <p className="text-white/60">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex items-center mt-6 gap-4">
                        <div>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <button className="text-color-primary font-bold py-[14px] px-5 bg-gradient-to-r from-[#d38abd] to-[#f2c357] rounded-xl">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-full text-white/5" />

            <p className="text-white/60 my-8">@ {new Date().getFullYear()} Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;