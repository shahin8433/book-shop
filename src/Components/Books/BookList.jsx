/* eslint-disable react/prop-types */

import React from "react";

import { FiEdit } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import "./../../styles/MyStyles.css";

const BookList = ({
  books,
  deleteBook,
  handleEditBook,
  handleDetailModal,
  handleFavourite,
}) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mt-2 mx-5 ">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex gap-2 m-2 w-96  autoFlex shadow-md border p-3 rounded-md"
          >
            <img
              onClick={() => handleDetailModal(book)}
              className="w-[128px] h-[160px] object-cover"
              src={book.imageUrl}
              alt=""
            />

            <div className="flex flex-col justify-between w-full">
              <h1 className="font-semibold text-xl line-clamp-1">
                {book.bookName}
              </h1>
              <h3 className="text-sm line-clamp-1">{book.authorName}</h3>
              <div className="flex justify-between items-center gap-x-2 ">
                <div className="flex justify-between items-center gap-1 text-[#FFAE00]">
                  <p>{`${book.rating}.0 `}</p>
                  <FaStar />
                </div>
                <p className="text-xs line-clamp-1">{book.category}</p>
                <FiEdit
                  className="text-[#FFAE00] text-xl"
                  onClick={() => {
                    handleEditBook(book);
                  }}
                />
                <div onClick={() => handleFavourite(book.id)}>
                  {book.isFavourite ? (
                    <FaHeart className="text-[#FFAE00] text-xl" />
                  ) : (
                    <FaRegHeart className="text-[#FFAE00] text-xl" />
                  )}
                </div>
                <MdDeleteForever
                  onClick={() => {
                    deleteBook(book.id);
                  }}
                  className="text-red-500 text-2xl"
                />
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center text-[#499F78] font-semibold text-xl">
                  <h3>{book.price}</h3>
                  <TbCurrencyTaka className="text-2xl" />
                </div>
                <button
                  onClick={() => handleDetailModal(book)}
                  className="bg-[#499F78] py-1 px-5 rounded-md text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
