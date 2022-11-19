import React from "react";
import { Link } from "react-router-dom";
import { dark, Github  } from '../constant'

const Footer = () => {
  return (
    <div className="fixed flex justify-center items-center bottom-0 left-0 right-0 h-20 p-5 rounded-lg m-3 text-white" style={{ backgroundColor: dark }} >
      Github Repo <a href={'https://github.com/algomonk016/flam-assignment'} target='_blank' > <img src={Github} className="w-8 h-8" /> </a>
    </div>
  )
}

export default Footer;