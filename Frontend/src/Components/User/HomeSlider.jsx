import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeSlider.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// import homeBck from '../../assets/homeimg.jpg'
// import homeBck3 from '../../assets/homeimg3.jpeg'
import axios from '../../Axios'
function HomeSlider() {

    const [bannerData, setBannerData] = useState()
    useEffect(() => {
        axios.get('/api/admin/get-banner').then((response) => {
            setBannerData(response.data)
            // console.log(response.data);
        })
    }, [])
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
                {bannerData?.map((banner, index) => (
                    <SwiperSlide key={index} >
                        <div className=''>
                            <img className='h-[20rem] lg:h-[35rem] w-full' src={`http://localhost:3000/${banner.file_name}`} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default HomeSlider