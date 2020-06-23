import React, { useState } from 'react';
import Header from './Header';

const Layout = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);
    return (
        <>
            <Header />
            
        </>
    );
}

export default Layout;