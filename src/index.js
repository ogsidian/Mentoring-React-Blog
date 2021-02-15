import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import dataContext from "./context";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [data, setData] = React.useState({
    title: "",
    image: "",
    text: "",
  });

  return (
    <React.StrictMode>
      <dataContext.Provider value={{ data, setData }}>
        <App />
      </dataContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
