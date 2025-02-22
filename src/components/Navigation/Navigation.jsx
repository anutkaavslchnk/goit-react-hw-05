import { NavLink } from "react-router-dom";

import s from './Navigation.module.css'
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
const Navigation = () => {

  return (

    <div >
        <nav className={s.nav}>
    <NavLink className={buildLinkClass} to="/">Home</NavLink>
    <NavLink   className={buildLinkClass} to="/movies">Movies</NavLink>
    
    </nav>
    <div className={s.line}></div>
    </div>
  )
};

export default Navigation;
