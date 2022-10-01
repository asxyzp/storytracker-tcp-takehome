//IMPORTING PACKAGES
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiNewspaper, HiOutlineNewspaper, HiOutlinePlusCircle, HiPlusCircle } from "react-icons/hi";

/**
 * FUNCTION : SideBar COMPONENT
 * FUNCTIONALITY : CONTAINS DESCRIPTION OF THE APP AND LINKS TO DIFFERENT SCREENS
 * @param {*} props : COMPONENT PROPS
 * @returns : <SideBar/>
 */
const SideBar = (props) => {

    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="sidebar">
            <div className="fw-bolder bg-black text-white sidebar-icon h1">
                St
            </div>
            <div className='sidebar-menu-container'>
            <Link to="/" className={["sidebar-menu lead text-dark text-decoration-none", pathname==='/'?"sidebar-menu--selected":""].join(" ")}>
                {pathname==='/'?<HiNewspaper className="me-2" />:<HiOutlineNewspaper className="me-2" />}
                Stories
            </Link>
            <Link to="/create" className={["sidebar-menu lead text-dark text-decoration-none", pathname==='/create'?"sidebar-menu--selected":""].join(" ")}>
                {pathname==='/'?<HiOutlinePlusCircle className="me-2" />:<HiPlusCircle className="me-2" />}
                Create
            </Link>
            </div>
        </div>
    );
}

export default SideBar
