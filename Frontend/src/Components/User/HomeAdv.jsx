import React from 'react'
import adv from '../../assets/adv.jpg'
function HomeAdv() {
  return (
    <div className='flex justify-center bg-slate-700/20 p-4'>
        <img src={adv} className='w-[80rem] rounded-md' alt="" />
    </div>
  )
}

export default HomeAdv