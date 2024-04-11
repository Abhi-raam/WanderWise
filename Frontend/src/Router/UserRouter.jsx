import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserNavbar from '../Components/User/UserNavbar'

import Logging from '../Context/UserContext'
import Search from '../Pages/User/Search'
import News from '../Pages/User/News'
import TopDestination from '../Pages/User/TopDestination'

function UserRouter() {
    return (
        <div>
            <Logging> {/* context */}
                <UserNavbar />
                <div className='bg-slate-900'>
                <Routes>
                    <Route path='/' element={<UserHome />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/top-destination' element={<TopDestination />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
                </div>
            </Logging>
        </div>
    )
}

export default UserRouter