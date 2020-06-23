import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from './MenuItem';

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
  
export const Navigation = ({ y }) => (
    <motion.ul 
        className="navigation" 
        variants={variants}
        transition={{ type: "spring", stiffness: 40 }}
    >
        {itemIds.map(i => (
             <MenuItem i={i} key={i} y={y} />
        ))}
    </motion.ul>
);

const itemIds = ["Home", "Courses", "About", "FAQ's", "Contact"];
