import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";

const Main = () => {
    return (
        <div>
            <Home />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;