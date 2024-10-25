/* eslint-disable react/prop-types */
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdFolderDelete } from "react-icons/md";
import { MdWindow } from "react-icons/md";
import { HiPlus } from "react-icons/hi";

const Header = ({ handleShowModal,searchQuary,handleSearch,handleAllDeleteBook }) => {
  return (
    <>
     <div className="fixed top-0 w-full z-50 bg-white border-b-2 border-b-[#499F78]">
     <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mx-5 md:mx-20 py-3 md:py-5 ">
        <div className="flex justify-center items-center gap-x-5">
          <FaBookOpen className="text-3xl text-[#499F78]" />
          <div>
            <input 
              className="border bg-[#EDF5F1] w-full md:w-96 py-1 pl-2 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Search"
              value={searchQuary}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full md:w-auto md:gap-x-5">
          <MdWindow className="text-2xl" />
          <FaHeart className="text-2xl text-[#FFAE00]"/>
          <MdFolderDelete onClick={handleAllDeleteBook} className="text-2xl text-red-500"/>
          <MdOutlineLightMode className="text-2xl"/>
          <button className="flex justify-between items-center gap-x-2 border-2 border-[#499F78] px-3 py-1 rounded-md text-[#499F78] text-lg">
            <HiPlus />
            <span onClick={handleShowModal}> Add Book</span>
          </button>
        </div>
      </div>
     </div>
    </>
  );
};

export default Header;
