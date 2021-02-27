import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [bookEdit, setBookEdit] = useState({
    title: "",
    author: "",
  });
  const [bookDelete, setBookDelete] = useState({
    title: "",
    author: "",
  });

  const handleBookClick = (bookIndex) => {
    console.log("bookIndex:", bookIndex);
    const book = bookList[bookIndex];
    console.log("book", book);
    setBookEdit(book);
    setBookDelete(book);
  };

  const handleEditBook = (book) => {
    console.log("handleEditBook", book);
    const foundBook = bookList.findIndex((bookEl) => {
      console.log("bookEl:", bookEl);
      return bookEl._id === book._id;
    });
    console.log("foundBook:", foundBook);
    const newBooks = [...bookList];
    newBooks[foundBook] = book;
    setBookList(newBooks);
    fetch(`http://localhost:9000/api/v1/books/${book._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }).then((response) => {
      console.log("PUT response:", response);
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
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Lord of the Rings</td>
            <td>JRR Tolkien</td>
            <td>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
