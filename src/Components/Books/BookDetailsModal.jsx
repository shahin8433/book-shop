/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

const BookDetailsModal = ({ detailCloseModal, bookName }) => {
  return (
    <>
      <div
        key={bookName.id}
        onClick={detailCloseModal}
        className="fixed inset-0 bg-[#EDF5F1] w-full  flex justify-center items-center min-h-screen "
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="z-50 w-1/2 flex flex-col gap-y-10 bg-white mx-auto p-10 rounded-2xl"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-[#499F78] text-2xl font-semibold">
              Book Details
            </h1>
            <div>
              <IoClose
                onClick={detailCloseModal}
                className="text-2xl text-red-400 "
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <div className="w-[150px]">
                <img src={bookName.imageUrl} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-2xl font-semibold">{bookName.bookName}</h1>
              <h3 className="text-xl">{bookName.authorName}</h3>
              <p>
                <span className="text-2xl font-semibold">Book Review:</span>{" "}
                <span className="block text-sm">{bookName.bookReview}</span>
              </p>
              <div className="flex gap-x-5 items-center border border-black w-fit mt-2 p-1 rounded-2xl">
                <button className="bg-[#499F78]  px-2 rounded-2xl text-white ">
                  Book Now
                </button>
                <div className="flex items-center text-[#499F78] pr-3 ">
                  <p className=" ">{bookName.price} </p>
                  <TbCurrencyTaka />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailsModal;
