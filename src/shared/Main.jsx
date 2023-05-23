import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;