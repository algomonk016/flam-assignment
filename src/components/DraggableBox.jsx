import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { DragIconFilled } from '../constant'

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
      <div className="w-fit flex items-start" ref={innerDiv}>
        {children}
        <span id="handle" className="cursor-pointer p-1"> 
          <img src={DragIconFilled} className="w-8 h-8" style={{ pointerEvents: 'none' }}  />
        </span>
      </div>
    </Draggable>
  )
}

export default DraggableBox;