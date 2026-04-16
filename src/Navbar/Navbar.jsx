
import { NavLink, Outlet } from 'react-router';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className="container mx-auto flex justify-between items-center ">
  <div className="navbar-start">
    <div className="dropdown">
  
    </div>
    <a className="btn btn-ghost text-2xl font-bold  text-black">Keen <span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className=" flex navbar-end">
     <ul className='flex gap-4 text-[16px] justify-center items-center'>
        <li className='flex'>
           <NavLink to={"/"} end className={({isActive })=> isActive ? "text-white bg-[#244D3F] px-3 py-1 text-[16px] rounded-sm flex items-center gap-2" : "flex items-center gap-2"}>
             <FaHome /> Home
            </NavLink>
            
        </li>
      <li>
            <NavLink to={"/timeline"} className={({isActive })=> isActive ? "text-white bg-[#244D3F] px-3 py-1 text-[16px] rounded-sm flex items-center gap-2" : "flex items-center gap-2"}>
              <RiTimeLine /> Timeline
            </NavLink>
            
        </li>
         <li>
            <NavLink to={"/extra"} className={({isActive })=> isActive ? "text-white bg-[#244D3F] px-3 py-1 text-[16px] rounded-sm flex items-center gap-2" : "flex items-center gap-2"}>
               Stats
            <TfiStatsUp /> </NavLink>
            
        </li>
     </ul>
  </div>
</div>
         
        </div>
    );
};

export default Navbar;