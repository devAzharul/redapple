import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandLogo from '../../../public/logo/alexander.png'
import brandLogo1 from '../../../public/logo/Basf-2.png'
import brandLogo2 from '../../../public/logo/CAD-1.png'
import brandLogo4 from '../../../public/logo/CDDL-2.png'
import brandLogo6 from '../../../public/logo/DEW-2.png'
import brandLogo7 from '../../../public/logo/dow-1.png'
import brandLogo8 from '../../../public/logo/Redcre-2.png'
import brandLogo9 from '../../../public/logo/unicef.png'
import brandLogo10 from '../../../public/logo/coffee-bean.png'
import brandLogo11 from '../../../public/logo/doctorola.png'
import brandLogo12 from '../../../public/logo/General-pharma.png'
import brandLogo13 from '../../../public/logo/Johnson-johnson.png'
import brandLogo14 from '../../../public/logo/Landmark.png'
import brandLogo15 from '../../../public/logo/mango.png'
import brandLogo16 from '../../../public/logo/MGH.png'
import brandLogo17 from '../../../public/logo/milady.png'
import Image from 'next/image';

const Clients = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='pb-20'>
      <h1 className='pb-5 text-center text-2xl font-bold'>Our Trusted Clients</h1>
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
            <Image src={brandLogo4} />
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
          <div>
            <Image src={brandLogo9} />
          </div>
          <div>
            <Image src={brandLogo10} />
          </div>
          <div>
            <Image src={brandLogo11} />
          </div>
          <div>
            <Image src={brandLogo12} />
          </div>
          <div>
            <Image src={brandLogo13} />
          </div>
          <div>
            <Image src={brandLogo14} />
          </div>
          <div>
            <Image src={brandLogo15} />
          </div>
          <div>
            <Image src={brandLogo16} />
          </div>
          <div>
            <Image src={brandLogo17} />
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default Clients;