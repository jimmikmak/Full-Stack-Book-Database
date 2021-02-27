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
            <td>Title data</td>
            <td>Author data</td>
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
