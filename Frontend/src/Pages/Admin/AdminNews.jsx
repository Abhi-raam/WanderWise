import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiMonitor, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from '../../Axios'
function AdminNews() {
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [showNewsDetails, setShowNewsDetails] = useState(null);
    const [newsData, setNewsData] = useState()
    const toggleDropdown = (id) => {
        setShowDropdownId(showDropdownId === id ? null : id);
    };

    const toggleNewsDetails = (id) => {
        setShowNewsDetails(showNewsDetails === id ? null : id);
    };

    useEffect(() => {
        axios.get('/api/admin/get-news').then((response) => {
            setNewsData(response.data)
        })
    }, [])

    const deleteNews = (newsId, newsName) => {
        const confirm = window.confirm(`Are you sure you want to delete ${newsName}`)
        if (confirm) {
            axios.delete(`/api/admin/delete-news/${newsId}`).then((response => {
                alert(response.data.news_heading + " Deleted successfully")
                window.location.reload()
            }))
        }
    }

    return (
        <div className='pt-20'>
            <div className='flex justify-between px-5'>
                <h2 className='text-3xl font-semibold'>News</h2>
                <Link to="/admin/news/create">
                    <button className='text-violet-600 flex items-center gap-3 border border-violet-700 p-1 rounded-md px-3 hover:bg-slate-100'>
                        <FaPlus />Create New
                    </button>
                </Link>
            </div>
            <div>
                <div className=' m-5 p-2 rounded-md bg-slate-100 shadow-md'>
                    <table className='table'>
                        <thead className='font-semibold text-black text-center border border-slate-600'>
                            <tr className='border border-slate-600'>
                                <th>S NO</th>
                                <th>News Heading</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='border border-slate-600'>
                            {newsData?.map((item, index) => (
                                <tr className='hover cursor-pointer text-center font-medium' key={item._id}>
                                    <td className='border border-slate-600'>{index + 1}</td>
                                    <td className='border border-slate-600'>{item?.news_heading}</td>
                                    <td className='border border-slate-600'>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="">
                                                <div className="w-[10rem]">
                                                    <img src={`http://localhost:3000/${item.file_name}`} alt={`hello`} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='max-w-[25rem] text-justify border border-slate-600'>{item.news_description}</td>
                                    <td className='border border-slate-600'>{new Date(item?.time).toDateString()}</td>
                                    <td className='border border-slate-600'>
                                        <div className="dropdown dropdown-end" onClick={() => toggleDropdown(item._id)}>
                                            <div tabIndex={0} role="button" className="btn btn-xs m-1" ><HiOutlineDotsHorizontal className='text-xl' /></div>
                                            {showDropdownId === item._id && (
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                                    <li><button onClick={() => toggleNewsDetails(item._id)}><FiMonitor />Show</button></li>
                                                    <li><Link to={`/admin/news/edit/${item._id}`}><FiEdit />Edit </Link></li>
                                                    <li className='text-red-600' onClick={() => deleteNews(item._id, item.news_heading)}><a><RiDeleteBin6Line />Delete </a></li>
                                                </ul>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showNewsDetails && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-[50rem] h-[35rem] p-8 rounded-md space-y-5 overflow-y-scroll">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-medium">Show</h2>
                            <button className="text-3xl text-red-600" onClick={() => toggleNewsDetails(null)}><IoClose /></button>
                        </div>
                        <div className='space-y-5'>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-sm font-semibold text-slate-500'>Image</h2>
                                <img src={`http://localhost:3000/${newsData.find(item => item._id === showNewsDetails).file_name}`} className='w-[25rem]' alt="" />
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Id</h2>
                                <p className='font-semibold text-sm'>{newsData.find(item => item._id === showNewsDetails)._id}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Name</h2>
                                <p className='font-semibold text-sm'>{newsData.find(item => item._id === showNewsDetails).news_heading}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Description</h2>
                                <p className='font-semibold text-sm'>{newsData.find(item => item._id === showNewsDetails).news_description}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Created on</h2>
                                <p className='font-semibold text-sm'>{new Date(newsData.find(item => item._id === showNewsDetails).time).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminNews;
