import React, { useEffect, useState } from "react";
import Footer from "../Share/Footer";
import Header from "../Share/Header";
import BookCard from "./BookList";
import BookModal from "./BookModal";
import BookBoard from "./BookBoard";
import { getBooksFromLocalStorage } from "../../utils/LocalStorage";

const Bookslayout = () => {
  const [books, setBooks] = useState(getBooksFromLocalStorage);
  const [showModal, setShowModal] = useState(false);
  const [searchQuary, setSearchQuary] = useState("");
  const handleShowModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  const handleAddBook = (newBook) => {
    console.log(newBook);
    console.log(books);
    return setBooks([...books, newBook]);
  };
  const closeModal = () => {
    return setShowModal(false);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuary(value);
    console.log(value);
  };
  const desplayBooks = books.filter(
    (book) =>
      book.bookName.includes(searchQuary) ||
      book.authorName.includes(searchQuary)
  );
  const handleAllDeleteBook = () => {
    setBooks([]);
  };
  return (
    <>
      <div>
        <Header
          handleShowModal={handleShowModal}
          searchQuary={searchQuary}
          handleSearch={handleSearch}
          handleAllDeleteBook={handleAllDeleteBook}
        />

        <BookBoard
          handleAddBook={handleAddBook}
          showModal={showModal}
          closeModal={closeModal}
          books={desplayBooks}
          setBooks={setBooks}
          setShowModal={setShowModal}
        />

        <Footer />
      </div>
    </>
  );
};

export default Bookslayout;
