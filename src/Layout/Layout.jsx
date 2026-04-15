import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../FooterSection/Footer';
import FriendList from '../HowManyFriends/FriendList';
import FriendsDetails from '../FriendsDetails/FriendsDetails';


const fetchFriends = async()=>{
    const res = await fetch ("/friend.json");
    return res.json();
}
const Layout = () => {
    const friendsPromise = fetchFriends();

    return (
        <div>
                  <Navbar />
      <Outlet />
      <FriendList/>
      <Suspense fallback={
    <div className="flex gap-2 justify-center items-center h-40">
      <span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-accent"></span>
    </div>
  }>
        <FriendsDetails friendsPromise={friendsPromise}/>
      </Suspense>
      <Footer /> 

        </div>
    );
};

export default Layout;