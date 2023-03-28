import React from 'react';
import {BsPhone,BsClock} from'react-icons/bs'
import {FaLinkedinIn,FaYoutube} from'react-icons/fa'
import {CiMail} from'react-icons/ci'
import {GrFacebookOption} from'react-icons/gr'

const Banner = () => {
    
    return (     
<div className="px-8 py-2 bg-gray-900 text-gray-100">
	<div className="flex items-center mx-auto container justify-center md:justify-between">
		<div>
			<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><BsPhone/></span>019 REDAPPLE&nbsp;</span>
			<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><CiMail/></span>info@redapple.com.bd&nbsp;</span>
			<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><BsClock/></span>Working Hours: 10:00-8:00</span>
		</div>
        <div className="items-center gap-2 hidden md:flex">
		<a href="https://www.facebook.com/redapplebd007" target="_blank" rel="noopener noreferrer">
			<span className="hover:underline focus-visible:underline"><GrFacebookOption/></span>
		</a>
		<a href="#" rel="noopener noreferrer">
			<span className="hover:underline focus-visible:underline"><FaLinkedinIn/></span>
		</a>
		<a href="https://www.youtube.com/channel/UCS3lf1fJvqM0tnVjX0MDROg" target="_blank" rel="noopener noreferrer">
			<span className="hover:underline focus-visible:underline"><FaYoutube/></span>
		</a>
        </div>
	</div>
</div>
    );
};

export default Banner;