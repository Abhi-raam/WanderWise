import React, { useEffect, useState } from 'react'
import NewsCard from '../../Components/User/NewsCard'
import axios from '../../Axios'
import TraditionalNewsCard from '../../Components/User/TraditionalNewsCard'

function TraditionalNews() {
    
    const [traditionalNews, setTraditionalNews] = useState()
    useEffect(() => {
        axios.get('/api/admin/get-traditional-news').then((response) => {
            setTraditionalNews(response.data)
        })
    }, [])

  return (
    <div className='min-h-screen'>
    <div className="pt-28 lg:pt-[4.5rem]">
        <h3 className="font-semibold text-3xl text-center text-yellow-600">Traditional News</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center pb-4 pt-5">
        {traditionalNews?.map((newsDetails, index) => (
            <TraditionalNewsCard key={index} news={newsDetails} />
        ))}
    </div>
</div>
  )
}

export default TraditionalNews