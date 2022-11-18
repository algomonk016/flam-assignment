import React, { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { DragIconFilled, CHILD_DIV_RECT } from '../constant'

const DraggableBox = ({modelPosition, setModelPosition, children }) => {
  const innerDiv = useRef();
  const trackPos = (data) => {
    const { x, y } = data;
    setModelPosition({ x, y });
  };

  useEffect(() => {
    sessionStorage.setItem(CHILD_DIV_RECT, JSON.stringify(innerDiv.current.getBoundingClientRect()));
  }, [])

  return (
    <Draggable
      onDrag={(e, data) => trackPos(data)} 
      bounds="parent"
      handle="#handle"
      position={modelPosition}
    >
      <div className="w-fit flex items-start relative" ref={innerDiv}>
        {children}
        <span id="handle" className="cursor-pointer p-1 absolute right-0"> 
          <img src={DragIconFilled} className="w-8 h-8" style={{ pointerEvents: 'none' }}  />
        </span>
      </div>
    </Draggable>
  )
}

export default DraggableBox;