import Image from 'next/image';
import React from 'react';
import barcode from "../../../public/images/WhatsApp Image 2023-04-12 at 3.04.04 PM (1).jpeg"
import barcode1 from "../../../public/images/WhatsApp Image 2023-04-12 at 3.04.04 PM.jpeg"

const Footer = () => {
    return (
        <footer className="flex justify-around items-center p-8 mt-14 footer mb-0 bg-red-700 text-white dark:bg-slate-800 dark:text-white">
            <div>
                <Image src={barcode} height="100" width="100" />
            </div>
            <p>Copyright © 2023 - All right reserved by Red Apple</p>
            <div>
                <Image src={barcode1} height="100" width="100" />
            </div>
        </footer>
    );
};

export default Footer;