import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use efect");
    if (value >= 1) {
      document.title = `New messages (${value})`;
    }
  }, [value]); // runs if value changes

  useEffect(() => {
    console.log("hello world");
  }, []); // runs just once
  console.log("component");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
