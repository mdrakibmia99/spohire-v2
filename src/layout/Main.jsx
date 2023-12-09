import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="w-full overflow-hidden">
            <Home />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;