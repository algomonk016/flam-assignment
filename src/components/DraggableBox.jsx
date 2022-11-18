import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
// import { DragIcon } from '../constant'

const DraggableBox = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const innerDiv = useRef();
  const trackPos = (data) => {
    const { x, y } = data;
    setPosition({ x, y });
  };

  return (
    <Draggable
      onDrag={(e, data) => trackPos(data)} 
      bounds="parent"
      handle="#handle"
      position={position}
    >
      <div className="w-fit flex items-center" ref={innerDiv}>
        {children}
        <span id="handle" className="cursor-pointer p-1"> 
          Drag
        </span>
      </div>
    </Draggable>
  )
}

export default DraggableBox;