import React, {useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {IDisablingValues} from "../../models/utils/disablingValues.interface";

const MainLayout = () => {
    const [disablingValues, setDisablingValues] =
        useState<IDisablingValues>({total: 1, skip: 0, limit: 0});

    const getDisablingValues = (data: IDisablingValues) => setDisablingValues(data);

    return (
        <div>
            <Header />
            <Outlet context={{getDisablingValues, disablingValues}}/>
            <Footer />
        </div>
    );
};

export default MainLayout;