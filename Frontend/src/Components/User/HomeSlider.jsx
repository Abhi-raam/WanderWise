import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeSlider.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import homeBck from '../../assets/homeimg.jpg'
import homeBck3 from '../../assets/homeimg3.jpeg'
function HomeSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="z-10" >
                <SwiperSlide >
                    <div className=''>
                        <img className='h-[20rem] lg:h-[35rem] w-full' src={homeBck3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' '>
                        <img className=' h-[20rem] lg:h-[35rem] w-full' src={homeBck} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' '>
                        <img className=' h-[20rem] lg:h-[35rem] w-full' src={homeBck3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' '>
                        <img className=' h-[20rem] lg:h-[35rem] w-full' src={homeBck} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeSlider