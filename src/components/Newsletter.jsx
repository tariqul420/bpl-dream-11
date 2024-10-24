import Footer from "./Footer";

const Newsletter = () => {
    return (
        <div>
            <div className="w-11/12 flex flex-col items-center mx-auto rounded-2xl py-[88px]" style={{ background: "url(https://i.postimg.cc/3w64jNvT/bg-shadow.png)", backgroundSize: "cover" }}>
                <h2 className="text-3xl font-bold text-color-primary">Subscribe to our Newsletter</h2>
                <p className="text-color-finely font-semibold text-xl mt-4">Get the latest updates and news right in your inbox!</p>

                <div className="flex items-center gap-8 mt-6">
                    <div><input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" /></div>
                    <div><button className="text-color-primary font-bold py-[14px] px-5 bg-gradient-to-r from-[#d38abd] to-[#f2c357] rounded-xl">Claim Free Credit</button></div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Newsletter;