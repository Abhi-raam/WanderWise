import React, { useEffect, useState } from "react";
import HomeSlider from "../../Components/User/HomeSlider";
import HomeAdv from "../../Components/User/HomeAdv";
import NewsCard from "../../Components/User/NewsCard";
import DestinationCard from "../../Components/User/DestinationCard";
import axios from "../../Axios";
import { Link } from "react-router-dom";
function UserHome() {
  const [news, setNews] = useState();
  const [destinationData, setDestinationData] = useState();
  useEffect(() => {
    axios.get("/api/admin/get-news").then((response) => {
      setNews(response.data);
    });
    axios.get("/api/admin/get-destination").then((response) => {
      setDestinationData(response.data);
    });
  }, []);
  return (
    <div>
      <HomeSlider />
      <div className="">
        <HomeAdv />
      </div>

      <div>
        <div className="pt-4">
          <h3 className="font-semibold text-3xl text-center text-yellow-600">Top news</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center pb-4 pt-5">
          {news?.slice(0, 6).map((newsDetails, index) => (
            <NewsCard key={index} news={newsDetails} />
          ))}
        </div>
        <div className="flex justify-end pr-6 pb-4">
          <Link to="/news">
            <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600">View all News</button>
          </Link>
        </div>
      </div>

      <div>
        <div className="pt-4">
          <h3 className="font-semibold text-3xl text-center text-yellow-600">Top Destinations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center pb-4 pt-5">
          {destinationData?.slice(0, 6).map((destination, index) => (
            <DestinationCard key={index} destination={destination} />
          ))}
        </div>
        <div className="flex justify-end pr-6 pb-4">
          <Link to='/top-destination'>
          <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600">View all Destinations</button>
          </Link>
        </div>
      </div>

      <div>
        <div className="pt-4">
          <h3 className="font-semibold text-3xl text-center text-yellow-600">Top Traditional News</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center pb-4 pt-5">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="flex justify-end pr-6 pb-4">
          <button className="btn btn-sm bg-yellow-600 text-slate-200 hover:bg-slate-200 hover:text-yellow-600">View All Traditional News</button>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
