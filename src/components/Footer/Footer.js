import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="p-8 mt-14 footer footer-center mb-0 bg-red-700 text-white dark:bg-slate-800 dark:text-white">
            <div>
                <p>Copyright © 2023 - All right reserved by <Link href=''>DevAzharul</Link></p>
            </div>
        </footer>
    );
};

export default Footer;