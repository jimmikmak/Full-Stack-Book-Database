import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = (props) => {
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
            <td>JRR Tolkein</td>
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
