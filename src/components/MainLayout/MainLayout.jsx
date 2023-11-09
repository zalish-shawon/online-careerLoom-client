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
                    Welcome to the CareerLoom family! Thrilled to have you on board. 🚀
                    
                    </h1>
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