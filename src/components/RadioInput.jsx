import React from "react";

const RadioInput = ({ radio, onSelectOption }) => {
  const { title, value } = radio;

  return (
    <>
      <input onChange={() => onSelectOption(radio.value)} type={'radio'} name={'model-position'} value={value} /> 
      <span className="ml-2 mr-3">{title}</span>
    </>
  )
}

export default RadioInput;