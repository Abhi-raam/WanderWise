import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

function UserNavbar() {
    const { userLogin, setUserLogin } = useContext(UserContext)
    return (
        <div>
            <div className="navbar bg-slate-800/40 shadow-lg font-medium text-white fixed z-30">
                <div className="navbar-start">
                    {/* smallscreen */}
                    <div className="dropdown z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900/50 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">CityScout</Link>
                </div>
                {/* largscreen */}
                <div className="navbar-center hidden lg:flex z-20">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">Treditional News</Link></li>
                        <li><a>Top Destinations</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control hidden md:flex items-center justify-center">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto h-[2.5rem]" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="form-control p-2 px-4  justify-center items-center w-full md:hidden fixed z-30 pt-[4.5rem]">
                    <input type="text" placeholder="Search" className="input input-sm input-bordered w-full  bg-slate-200/90" />
                </div>
        </div>
    )
}

export default UserNavbar