import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";

const BookContainer = () => {
  const [bookList, setBookList] = useState([]);
  const [bookDelete, setBookDelete] = useState({
    title: "",
    author: "",
  });

  const handleBookClick = (bookIndex) => {
    console.log("bookIndex:", bookIndex);
    const book = bookList[bookIndex];
    console.log("book", book);

    setBookDelete(book);
    // setBookEdit(book);
  };

  const handleAddBookFormSubmit = (title, author) => {
    const newBook = { title: title, author: author };
    const newBooks = [...bookList];
    newBooks.push(newBook);
    setBookList(newBooks);

    fetch("http://localhost:9000/api/v1/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then((response) => {
      console.log("response:", response);
    });
  };

  const handleDeleteBook = (book) => {
    console.log("handleDeleteBook:", book);
    const foundBook = bookList.findIndex((bookEl) => {
      console.log("bookEl:", bookEl);
      return bookEl._id === book._id;
    });
    console.log("foundBook:", foundBook);
    const newBooks = [...bookList];
    newBooks[foundBook] = book;
    setBookList(newBooks);

    fetch(`http://localhost:9000/api/v1/books/${book._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("DELETE response:", response);
    });
  };

  //   const handleEditBook = (book) => {
  //     console.log("handleEditBook", book);
  //     const foundBook = bookList.findIndex((bookEl) => {
  //       console.log("bookEl:", bookEl);
  //       return bookEl._id === book._id;
  //     });
  //     console.log("foundBook:", foundBook);
  //     const newBooks = [...bookList];
  //     newBooks[foundBook] = book;

  //     setBookList(newBooks);

  //     fetch(`http://localhost:9000/api/v1/books/${book._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(book),
  //     }).then((response) => {
  //       console.log("PUT response:", response);
  //     });
  //   };

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("books response", response);
        return response.json();
      })
      .then((bookData) => {
        console.log("bookData:", bookData);
        setBookList(bookData.data);
      });
  }, []);

  return (
    <div className="container">
      <h1>Book Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add New Book</h2>
          <AddBookForm submit={handleAddBookFormSubmit} />
        </div>
        <div className="flex-large">
          <h2>Current Library</h2>
          <BookList
            books={bookList}
            handleClick={handleBookClick}
            book={bookDelete}
            submit={handleDeleteBook}
          />
        </div>
      </div>
    </div>
  );
};

export { BookContainer };
