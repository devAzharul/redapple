import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandLogo from'../../../public/logo/alexander.png'
import brandLogo1 from'../../../public/logo/coffee-bean.png'
import brandLogo2 from'../../../public/logo/doctorola.png'
import brandLogo3 from'../../../public/logo/General-pharma.png'
import brandLogo4 from'../../../public/logo/Johnson-johnson.png'
import brandLogo5 from'../../../public/logo/Landmark.png'
import brandLogo6 from'../../../public/logo/mango.png'
import brandLogo7 from'../../../public/logo/MGH.png'
import brandLogo8 from'../../../public/logo/milady.png'
import Image from 'next/image';

const Clients = () => {
    const settings = {
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <div>
            <h1 className='pb-5 text-center text-xl font-bold'>Our Trusted Clients</h1>
            <div>
        <Slider {...settings}>
          <div>
          <Image src={brandLogo} />
          </div>
          <div>
          <Image src={brandLogo1} />
          </div>
          <div>
          <Image src={brandLogo2} />
          </div>
          <div>
          <Image src={brandLogo3} />
          </div>
          <div>
          <Image src={brandLogo4} />
          </div>
          <div>
          <Image src={brandLogo5} />
          </div>
          <div>
          <Image src={brandLogo6} />
          </div>
          <div>
          <Image src={brandLogo7} />
          </div>
          <div>
          <Image src={brandLogo8} />
          </div>
        </Slider>
      </div>
        </div>
      
    );
};

export default Clients;