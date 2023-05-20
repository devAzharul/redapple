import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo/rsz_redapple_logo.png'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between bg-white text-gray-900">
            <div>
                <Link href='/' className="btn btn-ghost normal-case text-xl"><Image src={logo} width="100" /></Link>
            </div>
            <div>
                <Link className='mr-5 text-lg' href="/">Home</Link>
                <Link className='mr-5 text-lg' href="/AboutScreen">About us</Link>
                <Link className='mr-5 text-lg' href="/ClientScreen">Clients</Link>
                {/* <Link className='mr-5 text-lg' href="/PortfolioScreen">Portfolio</Link> */}
                <Link className='mr-5 text-lg' href="/GalleryScreen">Gallery</Link>
                <Link className='mr-5 text-lg' href="/ServiceScreen">Services</Link>
                <Link className='mr-5 text-lg' href="/ContactScreen">Contact us</Link>
            </div>
        </div>
    );
};

export default Navbar;