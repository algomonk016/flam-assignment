import React from "react";

const RadioInput = ({ radio }) => {
  const { title, value } = radio;

  return (
    <>
      <input type={'radio'} name={'model-position'} value={value} /> 
      <span className="ml-2 mr-3">{title}</span>
    </>
  )
}

export default RadioInput;