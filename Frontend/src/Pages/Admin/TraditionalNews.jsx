import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiMonitor, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { Link } from 'react-router-dom';

function TraditionalNews() {
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [showNewsDetails, setShowNewsDetails] = useState(null);

    const toggleDropdown = (id) => {
        setShowDropdownId(showDropdownId === id ? null : id);
    };

    const toggleNewsDetails = (id) => {
        setShowNewsDetails(showNewsDetails === id ? null : id);
    };

    const news = [
        {
            "id": 1,
            "name": "Traditional News 1",
            "description": "Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit",
            "createdOn" : "2024-08-29"
        },
        {
            "id": 2,
            "name": "Traditional News 2",
            "description": "Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit",
            "createdOn" : "2024-08-27"
        },
        {
            "id": 3,
            "name": "Traditional News 3",
            "description": "description of the news 3",
            "createdOn" : "2024-08-26"
        },
        {
            "id": 4,
            "name": "Traditional News 4",
            "description": "description of the news 4",
            "createdOn" : "2024-08-21"
        },
    ];

    return (
        <div className='pt-20 lg:h-screen'>
            <div className='flex justify-between px-5'>
                <h2 className='text-3xl font-semibold'>Traditional News</h2>
                <Link to="/admin/traditional-news/create">
                <button className='text-violet-600 flex items-center gap-3 border border-violet-700 p-1 rounded-md px-3 hover:bg-slate-100'>
                    <FaPlus />Create New
                </button>
                </Link>
            </div>
            <div>
                <div className=' m-5 p-2 rounded-md bg-white shadow-md'>
                    <table className='table'>
                        <thead className='font-semibold text-black text-center'>
                            <tr>
                                <th>S NO</th>
                                <th>Traditional News Heading</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((item, index) => (
                                <tr className='hover cursor-pointer text-center font-medium' key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td className='max-w-[10rem] text-justify'>{item.description}</td>
                                    <td>{item.createdOn}</td>
                                    <td>
                                        <div className="dropdown dropdown-end" onClick={() => toggleDropdown(item.id)}>
                                            <div tabIndex={0} role="button" className="btn btn-xs m-1" ><HiOutlineDotsHorizontal className='text-xl' /></div>
                                            {showDropdownId === item.id && (
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                                    <li><button onClick={() => toggleNewsDetails(item.id)}><FiMonitor />Show</button></li>
                                                    <li><a><FiEdit />Edit </a></li>
                                                    <li className='text-red-600'><a><RiDeleteBin6Line />Delete </a></li>
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
                    <div className="bg-white w-[30rem] p-8 rounded-md space-y-5">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-medium">Show</h2>
                            <button className="text-3xl text-red-600" onClick={() => toggleNewsDetails(null)}><IoClose/></button>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Id</h2>
                                <p className='font-semibold text-sm'>{news.find(item => item.id === showNewsDetails).id}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Name</h2>
                                <p className='font-semibold text-sm'>{news.find(item => item.id === showNewsDetails).name}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Description</h2>
                                <p className='font-semibold text-sm'>{news.find(item => item.id === showNewsDetails).description}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Created on</h2>
                                <p className='font-semibold text-sm'>{news.find(item => item.id === showNewsDetails).createdOn}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TraditionalNews;
