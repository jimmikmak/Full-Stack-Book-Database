import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const AddBookForm = () => {
  return (
    <div>
      <form>
        <label>Title</label>
        <input type="text" name="title" value="" />
        <label>Author</label>
        <input type="text" name="author" value="" />
        <Button type="button" class="btn btn-danger">
          Add New Book
        </Button>
      </form>
    </div>
  );
};

export default AddBookForm;
