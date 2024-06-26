import React from 'react'
import {Routes,Route } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import Sidenav from '../Components/Admin/Sidenav'
import AdminNews from '../Pages/Admin/AdminNews'
import CreateNews from '../Pages/Admin/CreateNews'
import TraditionalNews from '../Pages/Admin/TraditionalNews'
import CreateTraditionalNews from '../Pages/Admin/CreateTraditionalNews'
import EditNews from '../Pages/Admin/EditNews'
import AdminAdv from '../Pages/Admin/AdminAdv'
import CreateAdv from '../Pages/Admin/CreateAdv'
import AdminHomeBanner from '../Pages/Admin/AdminHomeBanner'
import CreateBanner from '../Pages/Admin/CreateBanner'
import Destination from '../Pages/Admin/Destination'
import CreateDestination from '../Pages/Admin/CreateDestination'
import EditTraditionalNews from '../Pages/Admin/EditTraditionalNews'
import EditDestination from '../Pages/Admin/EditDestination'


function AdminRouter() {
  return (
    <div>
      <Sidenav/>
        <Routes>
            <Route path='/' element={<AdminHome/>} />
            <Route path='/news' element={<AdminNews/>} />
            <Route path='/news/create' element={<CreateNews/>} />
            <Route path='/news/edit/:newsId' element={<EditNews/>} />
            <Route path='/traditional-news' element={<TraditionalNews/>} />
            <Route path='/traditional-news/create' element={<CreateTraditionalNews/>} />
            <Route path='/traditional-news/edit/:newsId' element={<EditTraditionalNews/>} />
            <Route path='/advertisements' element={<AdminAdv/>} />
            <Route path='/advertisements/create' element={<CreateAdv/>} />
            <Route path='/home-banner' element={<AdminHomeBanner/>} />
            <Route path='/home-banner/create' element={<CreateBanner/>} />
            <Route path='/destinations' element={<Destination/>} />
            <Route path='/destinations/create' element={<CreateDestination/>} />
            <Route path='/destinations/edit/:destId' element={<EditDestination/>} />
        </Routes>
    </div>
  )
}

export default AdminRouter