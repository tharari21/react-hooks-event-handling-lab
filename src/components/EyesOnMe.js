import React from "react";
// Code EyesOnMe Component Here
const EyesOnMe = () => {
  const focusHandler = () => {
    console.log("Good!");
  };
  const blurHandler = () => {
    console.log("Hey! Eyes on me!");
  };
  return (
    <button onFocus={focusHandler} onBlur={blurHandler}>
      Eyes on me
    </button>
  );
};
export default EyesOnMe;
