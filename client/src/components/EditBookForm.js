import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookmarkTwoTone } from "@material-ui/icons";

const EditBookForm = (props) => {
  const [book, setBook] = useState(props.currentBook);

  //   useEffect(() => {
  //     console.log("EditBookForm useEffect");
  //     setBook(props.book);
  //   }, [props.book]);

  const handleInputChange = (e) => {
    const { title, value } = e.target;

    setBook({ ...book, [title]: value });
  };

  return (
    <div>
      <form
        className="edit-book-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.updateBook(book._id, book);
        }}
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleInputChange}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleInputChange}
        />
        <Button type="submit" className="btn btn-success">
          Update Book
        </Button>
        <Button
          onClick={() => props.setEditing(false)}
          className="btn btn-success"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditBookForm;
