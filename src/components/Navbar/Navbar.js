import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'

const Navbar = () => {
    return (
        <div className="flex justify-center bg-red-600 text-gray-100">

            <div>
                <Link className='mr-5 text-lg' href="/">Home</Link>
                <Link className='mr-5 text-lg' href="/AboutScreen">About us</Link>
                <Link className='mr-5 text-lg' href="/ClientScreen">Clients</Link>
                {/* <Link className='mr-5 text-lg' href="/PortfolioScreen">Portfolio</Link> */}
                <Link className='mr-5 text-lg' href="/GalleryScreen">Gallery</Link>
                <Link className='mr-5 text-lg' href="/ServiceScreen">Services</Link>
                <Link className='mr-5 text-lg' href="/ContactScreen">Contact us</Link>
            </div>
            <div className="ml-80 items-center gap-2 hidden md:flex">
                <a href="https://www.facebook.com/redapplebd007" target="_blank" rel="noopener noreferrer">
                    <span className="hover:underline focus-visible:underline"><GrFacebookOption /></span>
                </a>
                <a href="#" rel="noopener noreferrer">
                    <span className="hover:underline focus-visible:underline"><FaLinkedinIn /></span>
                </a>
                <a href="https://www.youtube.com/channel/UCS3lf1fJvqM0tnVjX0MDROg" target="_blank" rel="noopener noreferrer">
                    <span className="hover:underline focus-visible:underline"><FaYoutube /></span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;