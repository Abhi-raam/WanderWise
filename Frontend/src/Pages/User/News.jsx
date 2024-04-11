import React, { useEffect, useState } from 'react'
import NewsCard from '../../Components/User/NewsCard'
import axios from '../../Axios'

function News() {

    const [news, setNews] = useState()
    useEffect(() => {
        axios.get('/api/admin/get-news').then((response) => {
            setNews(response.data)
        })
    }, [])

    return (
        <div className='min-h-screen'>
            <div className="pt-[4.5rem]">
                <h3 className="font-semibold text-3xl text-center text-yellow-600">Top news</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center pb-4 pt-5">
                {news?.map((newsDetails, index) => (

                    <NewsCard key={index} news={newsDetails} />
                ))}
            </div>
        </div>
    )
}

export default News