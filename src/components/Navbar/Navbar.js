import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from'../../../public/logo/rsz_redapple_logo.png'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between bg-white text-gray-900">
            <div>
        <Link href="" className="btn btn-ghost normal-case text-xl"><Image src={logo} height="20" width="100"/></Link>
            </div>
            <div>
        <Link className='mr-5 text-lg font-semibold' href="">Home</Link>
        <Link className='mr-5 text-lg font-semibold' href="">About us</Link>
        <Link className='mr-5 text-lg font-semibold' href="">Services</Link>
        <Link className='mr-5 text-lg font-semibold' href="">Contact</Link>
            </div>
      </div>
    );
};

export default Navbar;