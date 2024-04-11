import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import DestinationCard from '../../Components/User/DestinationCard';
function TopDestination() {
    const [destinationData, setDestinationData] = useState();

    useEffect(() => {
        axios.get("/api/admin/get-destination").then((response) => {
          setDestinationData(response.data);
        });
      }, []);

    return (
        <div className='min-h-screen'>
            <div className="pt-28 lg:pt-[4.5rem]">
                <h3 className="font-semibold text-3xl text-center text-yellow-600">Top Destinations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center pb-4 pt-5">
                {destinationData?.map((destination, index) => (
                    <DestinationCard key={index} destination={destination} />
                ))}
            </div>
        </div>
    )
}

export default TopDestination