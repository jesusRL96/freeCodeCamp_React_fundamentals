import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handlerClick = () => {
    if (text === "Random Title") {
      setText("New Title");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn btn-primary" onClick={handlerClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
