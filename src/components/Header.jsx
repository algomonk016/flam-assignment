import React, { useEffect, useState } from "react";
import { dark, PARENT_DIV_RECT, CHILD_DIV_RECT } from '../constant';
import { getWindowDimensions } from "../utils/helper";
import { Timer, RadioInput } from './';

const Header = (props) => {
  const { setModelPosition} = props;
  const [parentDivRect, setParentDivRect] = useState(null);
  const [childDivRect, setChildDivRect] = useState(null);

  const windowDimensions = getWindowDimensions();

  useEffect(() => {
    if(!!sessionStorage.getItem(PARENT_DIV_RECT)){
      setParentDivRect(JSON.parse(sessionStorage.getItem(PARENT_DIV_RECT)));
    }

    if(!!sessionStorage.getItem(CHILD_DIV_RECT)){
      setChildDivRect(JSON.parse(sessionStorage.getItem(CHILD_DIV_RECT)));
    }
  }, [])

  const radios = [
    {
      title: 'Top-Left',
      value: 'tl',
    },
    {
      title: 'Top-Right',
      value: 'tr',
    },
    {
      title: 'Center',
      value: 'c',
    },
    {
      title: 'Bottom-Right',
      value: 'br',
    },
    {
      title: 'Bottom-Left',
      value: 'bl',
    },
  ]

  const handleRadioSelect = (option) => {
    const xr = parentDivRect?.width - 300 - (windowDimensions?.width * 0.115);
    const yb = parentDivRect?.height - childDivRect?.height + 17;

    switch(option){
      case 'tl':
        setModelPosition({x: 0, y: 0})
        break;
      case 'tr':
        setModelPosition({x: xr, y: 0})
        break;
      case 'c':
        setModelPosition({x: xr/2, y: yb/2})
        break;
      case 'br':
        setModelPosition({x: xr, y: yb}) 
        break;
      case 'bl':
        setModelPosition({x: 0, y: yb})
        break;
    }
  }

  return (
    <div className="flex justify-between items-center h-20 p-5 rounded-lg m-3 text-white" style={{ backgroundColor: dark }} >
      <div className="flex" >
        {
          !!parentDivRect && 
          radios.map((radio) => {
            return(
              <RadioInput key={radio.title} radio={radio} onSelectOption = {handleRadioSelect} />
            )
          })
        }
      </div>
      <Timer initialHours={24} />
    </div>
  )
}

export default Header;