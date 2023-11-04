import { Outlet } from "react-router-dom";
import Navabr from "../Navbar/Navabr";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;