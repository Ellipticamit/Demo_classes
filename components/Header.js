import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Navigation } from './shared/Navigation';
import { MenuToggle } from "./shared/MenuToggle";
import { useWindowSize } from "./shared/useDimensions";

const Header = () => {
    const [isOpen, toggleOpen] = useState(false);
    const [Y, setY] = useState(0);
    const size = useWindowSize();
    let runOnce = true;

    useEffect(() => {
        if(size.width > 768) toggleOpen(true);
        if(size.width <= 768) setY(200);
    }, []);

    return (
        <header>
            <nav className="navbar">
                 <motion.div 
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="container"
                >
                    <div className="logo">
                        <a>BOOTCAMP</a>
                    </div>
                    <div className="main_navigation">
                        <Navigation y={Y} />
                    </div>
                    <MenuToggle toggle={() => toggleOpen(!isOpen)} />
                </motion.div>
            </nav>
        </header>
    )
}    

export default Header;
