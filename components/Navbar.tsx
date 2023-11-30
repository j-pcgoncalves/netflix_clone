import React, { useCallback, useEffect, useState } from "react";
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}>
                <img src="/images/logo.png" className="h-4 lg:h-7" alt="Netflix Logo" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" active />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar