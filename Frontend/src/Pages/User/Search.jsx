import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from '../../Axios'
import DestinationCard from '../../Components/User/DestinationCard'
function Search() {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState()
    const [searchResult, setSearchResult] = useState()

    useEffect(() => {
        const urlParms = new URLSearchParams(location.search)
        const searchTermFromUrl = urlParms.get("searchTerm")
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl)
        }
        // const fetchPost = async () => {
        //     const searchQuery = urlParms.toString()
        //     const res = await axios.get(`/api/admin/get?${searchQuery}`)
        // }
        const searchQuery = urlParms.toString()
        axios.get(`/api/admin/get?${searchQuery}`).then((response) => {
            setSearchResult(response.data);
        })

        // fetchPost()
    }, [location.search])



    return (
        <div className='min-h-screen pt-20'>
            <div>
                <h1 className='text-3xl font-semibold text-slate-200 p-3 mt-5'>Search Results : {searchTerm}</h1>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center pb-4 pt-5'>
                    {searchResult?.map((destination, index) => (
                        <DestinationCard destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search