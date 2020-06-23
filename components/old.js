

        <header>
           <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link href="/">
                            <a className="">
                                DEMO CLASSES
                            </a>
                        </Link> 
                    </div>

                    <motion.div
                        className="test"
                        initial="hidden"
                        animate="visible"
                        transition={{ type: "spring", stiffness: 10 }}
                        variants={variants}
                    />

                    <motion.ul
                        className="navssss"

                    >
                         <li>
                                <Link href="">
                                    <a> Home </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> Courses </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> About </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> FAQ's </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> Contact </a>
                                </Link>
                            </li>

                    </motion.ul>

                    <div className={`main-navigation ${mobClass}`}>
                        <ul className="navigation-box">
                            <li>
                                <Link href="">
                                    <a> Home </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> Courses </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> About </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> FAQ's </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a> Contact </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <HamBurger open={open} handleMenu={handleOpen} />
                </div>
           </nav>


        </header>
       

