import { Outlet } from "react-router-dom";
import Navabr from "../Navbar/Navabr";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-green-500">
                <Marquee pauseOnHover={true}>
                    <div className="flex gap-3">
                    <h1 className="text-xl text-white">
                     We support Palestine.
                    
                    </h1>
                    <img className="w-[30px] h-[30px]" src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1f5-1f1f8.svg" alt="" />
                    </div>

                </Marquee>
            </div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;