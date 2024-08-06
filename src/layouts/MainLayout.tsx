import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import Favourites from "../components/favourites/Favourites";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr/>
            <Favourites />
            <hr/>
            <Outlet />
            <hr/>
        </div>
    );
}

export default MainLayout;