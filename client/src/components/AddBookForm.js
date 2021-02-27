import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const AddBookForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    author: "",
  });

  // useEffect(() => {
  //   console.log("AddBookForm useEffect");
  //   setFormState(props.book);
  // }, [props.book]);

  const handleChange = (e) => {
    const newState = { ...formState, [e.target.name]: e.target.value };
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.title, formState.author);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formState.author}
          onChange={handleChange}
        />
        <Button type="submit" class="btn btn-danger">
          Add New Book
        </Button>
      </form>
    </div>
  );
};

export default AddBookForm;
