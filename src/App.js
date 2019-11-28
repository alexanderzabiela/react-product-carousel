import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Carousel from "./Carousel";
import "./App.css";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <Carousel path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
