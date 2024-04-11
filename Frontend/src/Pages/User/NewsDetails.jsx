import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../Axios';
import NewsCard from '../../Components/User/NewsCard';

function NewsDetails() {
    const { id } = useParams();
    const [newsData, setNewsData] = useState();
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`/api/admin/get-news-data/${id}`).then((response) => {
            setNewsData(response.data);
        });
        axios.get("/api/admin/get-news").then((response) => {
            setNews(response.data.filter(item => item._id !== id));
        });
    }, [id]);

    return (
        <div className='min-h-screen pt-20'>
            <div className='flex justify-around'>
                <div className='pb-3 pt-8 lg:pt-2 p-2'>
                    <div className=''>
                        <h1 className='text-slate-200 text-xl lg:text-3xl lg:max-w-[45rem]'>{newsData?.news_heading}</h1>
                    </div>
                    <div className='flex justify-center  pt-3'>
                        <img src={`http://localhost:3000/${newsData?.file_name}`} className='rounded w-[20rem] lg:w-[45rem]' alt="" />
                    </div>
                    <div className=' lg:w-[45rem] pt-3'>
                        <p className='text-slate-200 font-medium text-justify'>{newsData?.news_description}</p>
                    </div>
                </div>
                <div className='hidden lg:block space-y-2 pb-2 pt-2'>
                    {news?.sort(() => Math.random() - 0.5).slice(0, 2).map((newsDetails, index) => (
                        <NewsCard key={index} news={newsDetails} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsDetails;
