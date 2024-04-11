import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeSlider.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import adv from '../../assets/adv.jpg'
import adv2 from '../../assets/adv2.jpeg'
import axios from '../../Axios'

function HomeAdv() {
  const [advData, setAdvData] = useState()
  useEffect(() => {
    axios.get('/api/admin/get-advertisement').then((response) => {
      setAdvData(response.data)
      // console.log(response.data);
    })
  }, [])
  return (
    // <div className='flex justify-center bg-slate-700/20 p-4'>
    //     <img src={adv} className='w-[80rem] rounded-md' alt="" />
    // </div>
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="z-10 pt-3" >
        {advData?.map((adv, index) => (
          <SwiperSlide >
            <div className=' flex justify-center'>
              <a href={adv.url}>
              <img className='w-[80rem] h-[10rem]' src={`http://localhost:3000/${adv.file_name}`} alt="" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default HomeAdv