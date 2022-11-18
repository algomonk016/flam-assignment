import React from "react";
import { dark } from '../constant';
import { Timer, RadioInput } from './';

const Header = () => {

  const radios = [
    {
      title: 'Top-Right',
      value: 'Top-Right',
    },
    {
      title: 'Top-Left',
      value: 'Top-Left',
    },
    {
      title: 'Center',
      value: 'Center',
    },
    {
      title: 'Bottom-Right',
      value: 'Bottom-Right',
    },
    {
      title: 'Bottom-Left',
      value: 'Bottom-Left',
    },
  ]

  return (
    <div className="flex justify-between items-center h-20 p-5 rounded-lg m-3 text-white" style={{ backgroundColor: dark }} >
      <div className="flex" >
        {
          radios.map((radio) => {
            return(
              <RadioInput key={radio.title} radio={radio} />
            )
          })
        }
      </div>
      <Timer />
    </div>
  )
}

export default Header;