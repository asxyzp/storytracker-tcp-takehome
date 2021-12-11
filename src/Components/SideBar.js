//IMPORTING PACKAGES
import React from 'react';
import { Link } from 'react-router-dom';
import { BsNewspaper, BsPlusSquareFill } from "react-icons/bs";

/**
 * FUNCTION : SideBar COMPONENT
 * FUNCTIONALITY : CONTAINS DESCRIPTION OF THE APP AND LINKS TO DIFFERENT SCREENS
 * @param {*} props : COMPONENT PROPS
 * @returns : <SideBar/>
 */
const SideBar = (props) => {

    return (
        <div className="w-25 sidebar">
            <h3 className="d-flex justify-content-center align-items-center fw-bolder p-2 m-0">
                StoryTracker
            </h3>
            <Link to="/" className="d-flex justify-content-center align-items-center lead p-1 text-dark text-decoration-none">
                <BsNewspaper className="me-2" />
                Stories
            </Link>
            <Link to="/create" className="d-flex justify-content-center align-items-center lead p-1 text-dark text-decoration-none">
                <BsPlusSquareFill className="me-2" />
                Create
            </Link>
        </div>
    );
}

export default SideBar
