import React from 'react'
import './testimonials.css'
 import AVTR1 from '../../assets/download.jpeg'


 // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



 const data= [
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  },
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  },
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  },
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  },
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  },
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Loved your work you are the best',
  }
 ]
function testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'> {name}</h5>
                <small className='client__review'>
                {review}
                </small>
            </SwiperSlide> 
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials