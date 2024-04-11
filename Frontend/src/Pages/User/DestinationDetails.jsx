import React, { useEffect, useState } from 'react';
import DestinationCard from '../../Components/User/DestinationCard';
import { useParams } from 'react-router-dom';
import axios from '../../Axios';

function DestinationDetails() {
    const { id } = useParams();
    const [destinationData, setDestinationData] = useState();
    const [destinationDatas, setDestinationDatas] = useState([]);

    useEffect(() => {
        axios.get(`/api/admin/get-destination/${id}`).then((response) => {
            setDestinationData(response.data);
        });
        axios.get("/api/admin/get-destination").then((response) => {
            setDestinationDatas(response.data.filter(item => item._id !== id));
        });
    }, [id]);

    return (
        <div className='min-h-screen pt-20'>
            <div className='flex justify-around'>
                <div className='pb-3 pt-8 lg:pt-2 p-2'>
                    <div className=''>
                        <h1 className='text-slate-200 text-xl lg:text-3xl lg:max-w-[45rem]'>{destinationData?.name}</h1>
                    </div>
                    <div className='flex justify-center  pt-3'>
                        <img src={`http://localhost:3000/${destinationData?.file_name}`} className='rounded w-[20rem] lg:w-[45rem]' alt="" />
                    </div>
                    <div className=' lg:w-[45rem] pt-3'>
                        <p className='text-slate-200 font-medium text-justify'>{destinationData?.details}</p>
                    </div>
                    <div className='text-slate-200 pt-3'>
                        <h2>Location : </h2>
                        <p>{destinationData?.location}</p>
                    </div>
                </div>
                <div className='hidden lg:block space-y-2 pb-2 pt-2'>
                    {destinationDatas?.sort(() => Math.random() - 0.5).slice(0, 2).map((destination, index) => (
                        <DestinationCard key={index} destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DestinationDetails;
