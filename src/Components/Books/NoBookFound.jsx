/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const NoBookFound = ({ detailCloseModal }) => {
  return (
    <>
      <div
        onClick={detailCloseModal}
        className="fixed inset-0 bg-[#EDF5F1] w-full  flex justify-center items-center min-h-screen "
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="z-50 w-1/2 flex flex-col gap-y-10 bg-white mx-auto p-10 rounded-2xl"
        >
          <h1 className="text-[#80CC72] text-2xl">
            কোন বই খুঁজে পাওয়া যায়নি, দয়া করে নতুন কোন বই খুঁজুন...
          </h1>
        </div>
      </div>
    </>
  );
};

export default NoBookFound;
