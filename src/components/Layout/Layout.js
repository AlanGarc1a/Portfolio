import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggle = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={openMenu} toggle={toggle} />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;