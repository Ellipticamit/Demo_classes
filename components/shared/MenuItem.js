import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export const MenuItem = ({ i, y }) => {
  const variants = {
    open: {
      y,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.2 }}
      className="active"
    >
        <Link href="">
            <a>{i} </a>
        </Link>
    </motion.li>
  );
};

