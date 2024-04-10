import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserNavbar from '../Components/User/UserNavbar'

import Logging from '../Context/UserContext'

function UserRouter() {
    return (
        <div>
            <Logging> {/* context */}
                <UserNavbar />
                <div className='bg-slate-900'>

                <Routes>
                    <Route path='/' element={<UserHome />} />
                </Routes>
                </div>
            </Logging>
        </div>
    )
}

export default UserRouter