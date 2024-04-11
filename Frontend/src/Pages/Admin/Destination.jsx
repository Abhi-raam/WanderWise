import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMonitor, FiEdit } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "../../Axios";

function Destination() {
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [showAdvDetails, setShowAdvDetails] = useState(null);
    const [destinationData, setDestinationData] = useState();

    const toggleDropdown = (id) => {
        setShowDropdownId(showDropdownId === id ? null : id);
    };

    const toggleAdvDetails = (id) => {
        setShowAdvDetails(showAdvDetails === id ? null : id);
    };

    useEffect(() => {
        axios.get("/api/admin/get-destination").then((response) => {
            setDestinationData(response.data);
        });
    }, []);

    const deleteDestination = (destinationId) => {
        const confirm = window.confirm(`Are you sure you want to delete ${destinationId}`);
        if (confirm) {
            axios.delete(`/api/admin/delete-destination/${destinationId}`).then((response) => {
                    alert(response.data);
                    window.location.reload();
                });
        }
    };
    const truncateText = (text, numWords) => {
        if (!text) {
            return '';
        }
        const words = text.split(' ');

        if (words.length <= numWords) {
            return text;
        }
        const truncatedText = words.slice(0, numWords).join(' ');
        return `${truncatedText} . . .`;
    };
    return (
        <div className="pt-20">
            <div className="flex justify-between px-5">
                <h2 className="text-3xl font-semibold">Top Destination</h2>
                <Link to="/admin/destinations/create">
                    <button className="text-violet-600 flex items-center gap-3 border border-violet-700 p-1 rounded-md px-3 hover:bg-slate-100">
                        <FaPlus />
                        Create New
                    </button>
                </Link>
            </div>
            <div>
                <div className=" m-5 p-2 rounded-md bg-slate-100 shadow-md">
                    <table className="table">
                        {/* head */}
                        <thead className="border border-slate-600">
                            <tr className="text-center border border-slate-600">
                                <th>S NO</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>About</th>
                                <th>Location</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {destinationData?.map((destination, index) => (
                                <tr className="text-center">
                                    <th className="border border-slate-600">{index + 1}</th>
                                    <td className="border border-slate-600">{destination.name}</td>
                                    <td className="border border-slate-600">
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="">
                                                <div className="w-[20rem]">
                                                    <img
                                                        src={`http://localhost:3000/${destination.file_name}`}
                                                        alt={destination.file_name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="max-w-[25rem] text-justify border border-slate-600">{truncateText(destination.details,50)}</td>
                                    <td className="max-w-[15rem] text-justify border border-slate-600">{destination.location}</td>
                                    <td className="border border-slate-600">
                                        {new Date(destination?.time).toDateString()}
                                    </td>
                                    <th className="border border-slate-600">
                                        <td>
                                            <div className="dropdown dropdown-end" onClick={() => toggleDropdown(destination._id)}>
                                                <div tabIndex={0} role="button" className="btn btn-xs m-1" >
                                                    <HiOutlineDotsHorizontal className="text-xl" />
                                                </div>
                                                {showDropdownId === destination._id && (
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                                        <li>
                                                            <button onClick={() => toggleAdvDetails(destination._id)}>
                                                                <FiMonitor />
                                                                Show
                                                            </button>
                                                        </li>
                                                        <li><Link ><FiEdit />Edit </Link></li>
                                                        <li className="text-red-600" onClick={() => deleteDestination(destination._id)}>
                                                            <a><RiDeleteBin6Line /> Delete</a>
                                                        </li>
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
                    <div className="bg-white w-[50rem] h-[35rem] p-8 rounded-md space-y-5 overflow-y-scroll">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-medium">Show</h2>
                            <button className="text-3xl text-red-600" onClick={() => toggleAdvDetails(null)} >
                                <IoClose />
                            </button>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">Image</h2>
                                <img src={`http://localhost:3000/${destinationData.find((adv) => adv._id === showAdvDetails).file_name}`}alt=""/>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">Id</h2>
                                <p className="font-semibold text-sm">
                                    {destinationData.find((adv) => adv._id === showAdvDetails)._id}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">Name</h2>
                                <p className="font-semibold text-sm">
                                    {destinationData.find((adv) => adv._id === showAdvDetails).name}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">Details</h2>
                                <p className="font-semibold text-sm">
                                    {destinationData.find((adv) => adv._id === showAdvDetails).details}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">Location</h2>
                                <p className="font-semibold text-sm">
                                    {destinationData.find((adv) => adv._id === showAdvDetails).location}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold text-slate-500">
                                    Created on
                                </h2>
                                <p className="font-semibold text-sm">
                                    {new Date(
                                        destinationData.find((adv) => adv._id === showAdvDetails).time
                                    ).toDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Destination;
