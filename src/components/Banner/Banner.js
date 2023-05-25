import React from 'react';
import { CiMail } from 'react-icons/ci'
import { BsPhone, BsClock } from 'react-icons/bs'

const Banner = () => {

	return (
		<div>
			<div className="navbar flex justify-center mx-auto container">
				<div>
					<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><BsPhone /></span>019 REDAPPLE&nbsp;</span>
					<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><CiMail /></span>info@redapple.com.bd&nbsp;</span>
					<span className='ml-5 inline-flex'><span className='mt-1 mx-1'><BsClock /></span>Working Hours: 10:00-8:00</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;