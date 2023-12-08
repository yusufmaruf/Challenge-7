import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

import  { useEffect } from 'react';
import Testimonial from './testinial';

const TestimoniCarouser = () => {
  useEffect(() => {
    const swiper = new Swiper('.carousel-content', {
      loop: true,
      slidesPerView: 'auto', // Let Swiper automatically determine the number of visible slides
      slidesPerGroup: 1,
      centeredSlides: true,
      autoHeight: true,
     
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return <Testimonial />;
};


export default TestimoniCarouser;

