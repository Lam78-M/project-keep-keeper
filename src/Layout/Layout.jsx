import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../FooterSection/Footer';

const Layout = () => {
    return (
        <div>
                  <Navbar />
      <Outlet />
      <Footer /> 
        </div>
    );
};

export default Layout;