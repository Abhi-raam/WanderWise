import React from 'react'
import gym from '../../assets/Category/gym.jpg'
import hotel from '../../assets/Category/hotel.jpg'
import { Link } from 'react-router-dom'
function CategoryTable() {
    return (
        <div className=' p-3 '>
            <div className="overflow-x-auto  rounded-md">
                <table className="table border-[3px] rounded-md p-1">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='hover text-center'>
                            <th>1</th>
                            <td className='flex justify-center'>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-[4.5rem] h-[4.5rem]">
                                            <img src={gym} className='w-[10rem]' alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Gym</div>
                                    </div>
                                </div>
                            </td>
                            <td className=''>
                                <div className='flex justify-between '>
                                    <h3 className='font-bold'>5</h3>
                                    <Link to="/admin/category/1">
                                        <div className='btn btn-sm'>View all</div>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className='flex-col flex md:flex-row gap-2 justify-center'>
                                    <button className="btn btn-ghost btn-sm bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                                    <button className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Delete</button>
                                </div>
                            </td>
                        </tr>
                        {/* row 2 */}

                        <tr className='hover text-center'>
                            <th>2</th>
                            <td className='flex justify-center'>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-[4.5rem] h-[4.5rem]">
                                            <img src={hotel} className='w-[10rem]' alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hotel</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='flex justify-between '>
                                    <h3 className='font-bold'>8</h3>
                                    <Link to="/admin/category/2">
                                        <div className='btn btn-sm'>View all</div>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className='flex-col flex md:flex-row gap-2 justify-center'>
                                    <button className="btn btn-ghost btn-sm bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                                    <button className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default CategoryTable