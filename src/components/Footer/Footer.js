import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-around items-center p-8 mt-14 footer mb-0 bg-red-700 text-white dark:bg-slate-800 dark:text-white">
            <div>
                <Image src={barcode} height="100" width="100" />
            </div>
            <Link href='https://www.facebook.com/store.techhunt' target="_blank"><p>Copyright © 2023 - All right reserved by Tech-Hunt</p></Link>
            <div>
                <Image src={barcode1} height="100" width="100" />
            </div>
        </footer>

    );
};

export default Footer;