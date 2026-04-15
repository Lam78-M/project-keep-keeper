import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../FooterSection/Footer';
import FriendList from '../HowManyFriends/FriendList';

const Layout = () => {
    return (
        <div>
                  <Navbar />
      <Outlet />
      <FriendList/>
      <Footer /> 

        </div>
    );
};

export default Layout;