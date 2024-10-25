/* eslint-disable react/prop-types */

import React, { useState } from "react";
import BookModal from "./BookModal";
import BookList from "./BookList";
import BookDetailsModal from "./BookDetailsModal";
import NoBookFound from "./NoBookFound";
import { TbFilter } from "react-icons/tb";

const BookBoard = ({
  showModal,
  setShowModal,
  closeModal,
  handleAddBook,
  books,
  setBooks,
}) => {
  const [currentBook, setCurrentBook] = useState(null);
  const [detailShowModal, setDetailShowModal] = useState(false);
  const [bookName, setBookName] = useState({});
  const [sortBooks, setSortBooks] = useState("asc");

  const deleteBook = (bookId) => {
    const afterDeleteBooks = books.filter((book) => book.id !== bookId);
    setBooks(afterDeleteBooks);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setShowModal(true);
  };

  const handleDetailModal = (book) => {
    setDetailShowModal(true);
    setBookName({ ...book });
  };

  const handleAddEditBook = (updatedBook) => {
    if (currentBook) {
      const updatedBooks = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );
      setBooks(updatedBooks);
    } else {
      handleAddBook(updatedBook);
    }
    closeModal();
    setCurrentBook(null);
  };
  const detailCloseModal = () => {
    setDetailShowModal(false);
  };

  const booksSortByRating = () => {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortBooks === "asc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
    setBooks(sortedBooks);
    setSortBooks(sortBooks === "asc" ? "dsc" : "asc");
  };
  const booksSortByPrice = () => {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortBooks === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setBooks(sortedBooks);
    setSortBooks(sortBooks === "asc" ? "dsc" : "asc");
  };
  const handleFavourite = (bookId) => {
    const favourite = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, isFavourite: !book.isFavourite };
      } else {
        return book;
      }
    });
    setBooks(favourite);
  };
  return (
    <div>
      <div className="mx-20  mt-24 flex gap-x-4 items-center text-sm">
        <TbFilter
          onClick={booksSortByRating}
          className="text-[#499F78] text-2xl"
        />
        <button
          onClick={booksSortByRating}
          className="border border-[#499F78] py-0.5 px-4 rounded-md hover:bg-[#499F78] hover:text-white  focus:bg-[#499F78] focus:text-white"
        >
          Filter by Rating
        </button>
        <button
          onClick={booksSortByPrice}
          className="border border-[#499F78] py-0.5 px-4 rounded-md hover:bg-[#499F78] hover:text-white  focus:bg-[#499F78] focus:text-white"
        >
          Filter by Price
        </button>
        <button className="border border-[#499F78] py-0.5 px-4 rounded-md hover:bg-[#499F78] hover:text-white  focus:bg-[#499F78] focus:text-white">
          Filter by Name
        </button>
      </div>
      {books.length > 0 ? (
        <BookList
          books={books}
          deleteBook={deleteBook}
          handleEditBook={handleEditBook}
          setShowModal={setShowModal}
          handleDetailModal={handleDetailModal}
          handleFavourite={handleFavourite}
        />
      ) : (
        <NoBookFound />
      )}
      {detailShowModal && (
        <BookDetailsModal
          detailCloseModal={detailCloseModal}
          bookName={bookName}
        />
      )}
      {showModal && (
        <BookModal
          closeModal={closeModal}
          handleAddEditBook={handleAddEditBook}
          currentBook={currentBook}
        />
      )}
    </div>
  );
};

export default BookBoard;
