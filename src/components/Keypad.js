import React from "react";
// Code Keypad Component Here
const Keypad = () => {
  const handleChange = () => {
    console.log("Entering password...");
  };
  return <input onChange={handleChange} type="password" />;
};
export default Keypad;
