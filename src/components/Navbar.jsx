import { NavLink } from "react-router-dom";
import user from "../assets/user.png"
 
const Navbar = () => {
    return (
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-4 lg:gap-0 lg:ml-44">
            <div></div>
            <div className="text-[#706F6F] text-lg flex gap-6">
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold' : ''}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'font-bold' : ''}>About</NavLink>
                <NavLink to={'/career'} className={({ isActive }) => isActive ? 'font-bold' : ''}>Career</NavLink>
            </div>
            <div className="flex gap-4">
                <img src={user} alt="" />
                <button className="py-3 px-8 bg-stone-700 text-xl text-white font-bold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;