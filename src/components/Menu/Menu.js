import Image from 'next/image';
import React from 'react';
import img7 from '../../../public/images/1.jpg'
import img2 from '../../../public/images/2.jpg'
import img3 from '../../../public/images/3.jpg'
import img4 from '../../../public//images/4.jpg'
import img5 from '../../../public/images/5.jpg'
import img6 from '../../../public/images/6.jpg'
import img1 from '../../../public/images/7.jpg'
import img8 from '../../../public/images/8.jpg'
import img9 from '../../../public/images/9.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {

  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    lazyLode: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (


    <div className='mt-10 mb-20 flex flex-row-reverse justify-around'>
      <div class="ml-20 mt-20 w-5/12 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <button aria-current="true" type="button" class="w-full px-4 py-2 font-bold text-xl text-center text-white bg-red-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
          Our Services
        </button>
        <button type="button" class="w-full px-4 py-2 font-medium text-lg text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Advertising and Branding
        </button>
        <button type="button" class="w-full px-4 py-2 font-medium text-lg text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Event Management
        </button>
        <button type="button" class="w-full px-4 py-2 font-medium text-lg text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Designing and Printing
        </button>
        <button type="button" class="w-full px-4 py-2 font-medium text-lg text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Gift & promotional items
        </button>
      </div>
      <div className='w-5/12'>
        <Slider {...settings}>
          <div>
            <Image src={img1} />
          </div>
          <div>
            <Image src={img2} />
          </div>
          <div>
            <Image src={img3} />
          </div>
          <div>
            <Image src={img4} />
          </div>
          <div>
            <Image src={img5} />
          </div>
          <div>
            <Image src={img6} />
          </div>
          <div>
            <Image src={img7} />
          </div>
          <div>
            <Image src={img8} />
          </div>
          <div>
            <Image src={img9} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Menu;