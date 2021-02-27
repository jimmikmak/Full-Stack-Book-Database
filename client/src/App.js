import React from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

const App = () => {
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
