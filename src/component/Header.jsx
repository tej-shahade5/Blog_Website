import React from "react";
import {FaHome} from "react-icons/fa";
import {TbDeviceGamepad2} from "react-icons/tb";
import {BsChatTextFill} from "react-icons/bs";
import {RiNotification4Line,RiNewspaperLine} from "react-icons/ri";
import {MdCreate} from "react-icons/md";

const Header = () => {
  return (
    <div className="py-2 mx-5 bg-white-500">
      <div className="flex">
        <div className="flex w-80">
          <img src={'https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" className="h-8 w-8 rounded-md object-cover" />
          <input
            type="text"
            placeholder="Search Jobs"
            className="bg-gray-200 rounded-md ml-5 pl-4"
          />
        </div>
        <div className="flex flex-around ml-2">
            <button><FaHome size={30} className="mr-20"/></button>
            <button href="#"><RiNewspaperLine size={30} className="mr-20"/></button>
            <button href="#"><TbDeviceGamepad2 size={30} className="mr-20"/></button>
            <button href="#"><BsChatTextFill size={30} className="mr-20"/></button>
            <button href="#"><RiNotification4Line size={30} className="mr-20"/></button>
        </div>
        <div className="flex w-80 ml-10">
            <button href="#"><MdCreate size={30} className="mx-2 "/></button>          
            <button className="h-8 w-15 bg-yellow-500  px-3 rounded-md ml-5">Log In</button>
            <button className="h-8 w-15 bg-yellow-500 px-3 rounded-md ml-5">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header