import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../Axios';
import TraditionalNewsCard from '../../Components/User/TraditionalNewsCard';
function TraditionalNewsDetails() {
    const { id } = useParams();
    const [traditional, setTraditional] = useState();
    const [traditionalNews, setTraditionalNews] = useState([]);
    useEffect(() => {
        axios.get(`/api/admin/get-traditional-news/${id}`).then((response)=>{
            setTraditional(response.data)
            // setImage(response.data.file_name)
        })
        axios.get('/api/admin/get-traditional-news').then((response) => {
            setTraditionalNews(response.data.filter(item => item._id !== id))
        })
    }, [id])
    return (
        <div className='min-h-screen pt-20'>
            <div className='flex justify-around'>
                <div className='pb-3 pt-8 lg:pt-2 p-2'>
                    <div className=''>
                        <h1 className='text-slate-200 text-xl lg:text-3xl lg:max-w-[45rem]'>{traditional?.news_heading}</h1>
                    </div>
                    <div className='flex justify-center  pt-3'>
                        <img src={`http://localhost:3000/${traditional?.file_name}`} className='rounded w-[20rem] lg:w-[45rem]' alt="" />
                    </div>
                    <div className=' lg:w-[45rem] pt-3'>
                        <p className='text-slate-200 font-medium text-justify'>{traditional?.news_description}</p>
                    </div>
                </div>
                <div className='hidden lg:block space-y-2 pb-2 pt-2'>
                    {traditionalNews?.sort(() => Math.random() - 0.5).slice(0, 2).map((newsDetails, index) => (
                        <TraditionalNewsCard key={index} news={newsDetails} />
                        // <Traditional
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TraditionalNewsDetails