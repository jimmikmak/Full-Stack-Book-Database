import React, { useState } from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

const App = (props) => {
  const bookData = [
    { id: 1, title: "The Lord of the Rings", author: "JRR Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "IT", author: "Stephen King" },
  ];

  const [book, setBook] = useState(bookData);

  return (
    <div className="container">
      <h1>Book Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add New Book</h2>
          <AddBookForm />
        </div>
        <div className="flex-large">
          <h2>Current Library</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default App;
