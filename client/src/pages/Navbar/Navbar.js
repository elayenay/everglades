import React from "react"
import {NavLink}  from "react-router-dom";
import HomeIcon  from "../Navicons/homeicon"
import ProfileIcon  from "../Navicons/profileicon"
import MessageIcon  from "../Navicons/messageicon"


const Navbar = () => {
    return (
        <div>
            {/* <NavLink to="/home" title="Home"> */}
                <HomeIcon/>
            {/* </NavLink> */}
            {/* <NavLink to="/profile" title="Profile"> */}
                <ProfileIcon/>
            {/* </NavLink> */}
            {/* <NavLink to="/message" title="Message"> */}
                <MessageIcon/>
            {/* </NavLink>             */}
        </div>
    )
}

export default Navbar;