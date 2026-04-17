
import { NavLink, Outlet } from 'react-router';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">

       <div className="container mx-auto flex justify-between items-center">

       <div className="navbar-start flex items-center gap-2">
        
       <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to="/" end className="flex items-center gap-2">
             <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className="flex items-center gap-2">
             <RiTimeLine /> Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/extra" className="flex items-center gap-2">
          <TfiStatsUp /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
     
      <a className="btn btn-ghost text-2xl font-bold text-black">
        Keen <span className="text-[#244D3F]">Keeper</span>
      </a>
    </div>

    <div className="navbar-end hidden lg:flex">
      <ul className="flex gap-4 text-[16px] items-center">

        <li>
          <NavLink
            to="/"
            end
          className={({ isActive }) =>
          isActive
          ? "text-white bg-[#244D3F] px-3 py-1 rounded-sm flex items-center gap-2"
           : "flex items-center gap-2"
            }
          >
            <FaHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/timeline"
          className={({ isActive }) =>
         isActive
           ? "text-white bg-[#244D3F] px-3 py-1 rounded-sm flex items-center gap-2"
         : "flex items-center gap-2"
            }
          >
            <RiTimeLine /> Timeline
          </NavLink>
        </li>

        <li>
         <NavLink
            to="/extra"
         className={({ isActive }) =>
              isActive
            ? "text-white bg-[#244D3F] px-3 py-1 rounded-sm flex items-center gap-2"
            : "flex items-center gap-2"
            }
          >
            <TfiStatsUp /> Stats
          </NavLink>
       </li>

      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;