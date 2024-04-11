import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FiMonitor, FiEdit } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import adv from '../../assets/adv.jpg'
import axios from '../../Axios'

function AdminAdv() {
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [showAdvDetails, setShowAdvDetails] = useState(null);
    const [advData, setAdvData] = useState()
    const toggleDropdown = (id) => {
        setShowDropdownId(showDropdownId === id ? null : id);
    };

    const toggleAdvDetails = (id) => {
        setShowAdvDetails(showAdvDetails === id ? null : id);
    };

    useEffect(() => {
        axios.get('/api/admin/get-advertisement').then((response) => {
            setAdvData(response.data)
            // console.log(response.data);
        })
    }, [])

    const deleteAdv =(advId)=>{
        const confirm = window.confirm(`Are you sure you want to delete ${advId}`)
        if(confirm){
            axios.delete(`/api/admin/delete-adadvertisement/${advId}`).then((response => {
                alert(response.data)
                window.location.reload()
            }))
        }
    }
    return (
        <div className='pt-20'>
            <div className='flex justify-between px-5'>
                <h2 className='text-3xl font-semibold'>Advertisement</h2>
                <Link to="/admin/advertisements/create" >
                    <button className='text-violet-600 flex items-center gap-3 border border-violet-700 p-1 rounded-md px-3 hover:bg-slate-100'>
                        <FaPlus />Create New
                    </button>
                </Link>
            </div>
            <div>
                <div className=' m-5 p-2 rounded-md bg-slate-100 shadow-md'>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th>S NO</th>
                                <th>Image</th>
                                <th>Link</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {advData?.map((adv, index) => (
                                <tr className='text-center'>
                                    <th>{index+1}</th>
                                    <td>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="">
                                                <div className="w-[20rem]">
                                                    <img src={`http://localhost:3000/${adv.file_name}`} alt={adv.file_name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><a href={adv.url}>{adv.url}</a></td>
                                    <td>{new Date(adv?.time).toDateString()}</td>
                                    <th>
                                        <td>
                                            <div className="dropdown dropdown-end" onClick={() => toggleDropdown(adv._id)}>
                                                <div tabIndex={0} role="button" className="btn btn-xs m-1" ><HiOutlineDotsHorizontal className='text-xl' /></div>
                                                {showDropdownId === adv._id && (
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                                        <li><button onClick={() => toggleAdvDetails(adv._id)}><FiMonitor />Show</button></li>
                                                        <li><Link ><FiEdit />Edit </Link></li>
                                                        <li className='text-red-600' onClick={()=>deleteAdv(adv._id)}><a><RiDeleteBin6Line />Delete </a></li>
                                                    </ul>
                                                )}
                                            </div>
                                        </td>
                                    </th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            {showAdvDetails && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-[50rem] p-8 rounded-md space-y-5">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-medium">Show</h2>
                            <button className="text-3xl text-red-600" onClick={() => toggleAdvDetails(null)}><IoClose /></button>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Image</h2>
                                <img src={`http://localhost:3000/${advData.find(adv => adv._id === showAdvDetails).file_name}`} alt="" />
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Id</h2>
                                <p className='font-semibold text-sm'>{advData.find(adv => adv._id === showAdvDetails)._id}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Name</h2>
                                <p className='font-semibold text-sm'>{advData.find(adv => adv._id === showAdvDetails).url}</p>
                            </div>

                            <div>
                                <h2 className='text-sm font-semibold text-slate-500'>Created on</h2>
                                <p className='font-semibold text-sm'>{new Date(advData.find(adv => adv._id === showAdvDetails).time).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminAdv