import React from "react";

const Input = ({handleOnChange}) => {
  return <input style={{borderColor: 'black', borderWidth: 4}} onChange={handleOnChange}></input>;
};

export default Input;