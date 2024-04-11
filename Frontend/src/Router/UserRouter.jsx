import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserNavbar from '../Components/User/UserNavbar'

import Logging from '../Context/UserContext'
import Search from '../Pages/User/Search'
import News from '../Pages/User/News'
import TopDestination from '../Pages/User/TopDestination'
import TraditionalNews from '../Pages/User/TraditionalNews'
import NewsDetails from '../Pages/User/NewsDetails'
import DestinationDetails from '../Pages/User/DestinationDetails'
import TraditionalNewsDetails from '../Pages/User/TraditionalNewsDetails'

function UserRouter() {
    return (
        <div>
            <Logging> {/* context */}
                <UserNavbar />
                <div className='bg-slate-900'>
                <Routes>
                    <Route path='/' element={<UserHome />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/news-details/:id' element={<NewsDetails />} />
                    <Route path='/traditional-news' element={<TraditionalNews />} />
                    <Route path='/traditional-news-details/:id' element={<TraditionalNewsDetails />} />
                    <Route path='/top-destination' element={<TopDestination />} />
                    <Route path='/destination-details/:id' element={<DestinationDetails />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
                </div>
            </Logging>
        </div>
    )
}

export default UserRouter