import React from 'react'
import {Routes,Route } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import Sidenav from '../Components/Admin/Sidenav'
import AdminNews from '../Pages/Admin/AdminNews'
import CreateNews from '../Pages/Admin/CreateNews'
import TraditionalNews from '../Pages/Admin/TraditionalNews'
import CreateTraditionalNews from '../Pages/Admin/CreateTraditionalNews'
import EditNews from '../Pages/Admin/EditNews'


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
        </Routes>
    </div>
  )
}

export default AdminRouter