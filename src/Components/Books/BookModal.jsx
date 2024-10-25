/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const BookModal = ({ closeModal, handleAddEditBook, currentBook }) => {
  const [book, setBook] = useState({
    id: crypto.randomUUID(),
    bookName: "",
    rating: "",
    authorName: "",
    price: "",
    imageUrl: "",
    category: "",
    bookReview: "",
    isFavourite: false,
  });
  useEffect(() => {
    if (currentBook) {
      setBook(currentBook);
    }
  }, [currentBook]);
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setBook({
      ...book,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEditBook(book);
    closeModal();
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-[#EDF5F1] w-full  flex justify-center items-center min-h-screen "
        onClick={closeModal}
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={handleSubmit}
          className="z-50 w-3/4 flex flex-col gap-y-10 bg-white mx-auto p-10 rounded-2xl"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-[#499F78] text-2xl font-semibold">
              Add a Book
            </h1>
            <div>
              <IoClose
                onClick={closeModal}
                className="text-2xl text-red-400 "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-10">
            <div>
              <label htmlFor="bookName">Book Name</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="text"
                name="bookName"
                id="bookName"
                placeholder="Book Name"
                value={book.bookName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="text"
                name="rating"
                id="rating"
                placeholder="Rating"
                value={book.rating}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="authorName">Author Name</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="text"
                name="authorName"
                id="authorName"
                placeholder="Author Name"
                value={book.authorName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={book.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="url"
                name="imageUrl"
                id="imageUrl"
                placeholder="Image URL"
                value={book.imageUrl}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                className="border rounded-md block pl-2 w-full mt-2"
                type="text"
                name="category"
                id="category"
                placeholder="Category"
                value={book.category}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="bookReview">Book Review</label>
            <input
              className="border rounded-md block pl-2 w-full mt-2"
              type="text"
              name="bookReview"
              id="bookReview"
              placeholder="Book Review"
              value={book.bookReview}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#499F78] py-2 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BookModal;
