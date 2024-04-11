import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsNewspaper } from "react-icons/bs";
import { MdHome,} from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { LiaFortAwesomeAlt } from "react-icons/lia";
import { RiAdvertisementLine } from "react-icons/ri";


import { Link } from "react-router-dom";


function Sidenav() {
  const menus = [
    { name: "Dashboard", link: "/admin", icon: MdHome },
    { name: "News", link: "/admin/news", icon: BsNewspaper },
    { name: "Traditional News", link: "/admin/traditional-news", icon: IoIosPaperPlane },
    { name: "Destination", link: "/admin/destinations", icon: LiaFortAwesomeAlt },
    { name: "Advertisement", link: "/admin/advertisements", icon: RiAdvertisementLine },
    { name: "Home Banner", link: "/admin/home-banner", icon: BiSolidImageAdd },
    // { name: "Services", link: "/admin/services", icon: MdMiscellaneousServices },
  ];
  const [open, setOpen] = useState(false);

  const sidebarVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="fixed  shadow-md w-full z-50 ">
      <div className="flex relative bg-slate-800 text-slate-200">
        <div className="dropdown absolute">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mt-3">
            {!open ?
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)} />
              :
              <AiOutlineClose
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)} />
            }
          </div>
        </div>
        <div className="text-center flex-grow p-2 ">
          <p className="btn btn-ghost text-xl">WanderWise Admin</p>
        </div>
      </div>




      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed shadow-md bg-slate-800 min-h-screen w-72 text-gray-900 px-4"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed">
            {/* <div className="space-x-6 m-2 items-center  flex">
              <img className="w-12" src={ssbbroLogo} alt="" />
              <p className="flex-grow text-2xl xl:text-3xl font-semibold">SSB BRO</p>
            </div> */}

            <div className="flex-col">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  onClick={() => setOpen(!open)}
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#ebf6fc] hover:text-gray-800 transition rounded-md mt-5 text-slate-200 ${menu?.margin && "mt-5"}`}>
                  <div>{React.createElement(menu?.icon, { size: "30" })}</div>
                  {/* <h2 style={{ transitionDelay: `${i + 3}00ms` }}
                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                    {menu?.name}
                  </h2> */}
                  <h2>{menu?.name}</h2>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidenav;
