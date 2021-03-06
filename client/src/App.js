import React, { useState } from "react";
import { BookContainer } from "./components/BookContainer";
import "./index.css";
import Login from "./components/Login";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BookContainer />
    </div>
  );
};

export { App };
