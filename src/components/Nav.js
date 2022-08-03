import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { MdOutlineCalendarViewMonth } from "react-icons/md";



export const Nav = () => (
    <nav className="nav">
        <Link to="react-protrips/">
            <IoHomeOutline />
        </Link>
        <Link to="react-protrips/add">
            <BsFillCalendarPlusFill />
        </Link>
        <Link to="react-protrips/list">
            <MdOutlineCalendarViewMonth/>
        </Link>
    </nav>
)
