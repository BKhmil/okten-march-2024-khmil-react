import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr/>
            <Outlet />
            <hr/>
        </div>
    );
}

export default MainLayout;