import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = (children) => {
    return (
    <div>
            <Banner/>
            <Navbar/>
            {children}
            <Footer/>
    </div>
    );
};

export default Layout;