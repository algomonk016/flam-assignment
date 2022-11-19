import React, { useEffect, useState } from "react";

import { DisplayModel, Footer, Header } from "../components";
import { COORDS } from "../constant";

const Home = () => {

  const [modelPosition, setModelPosition] = useState( !!localStorage.getItem(COORDS) ? JSON.parse(localStorage.getItem(COORDS)) : {x: 0, y: 0} );

  const updateModelPosition = (newPosition) => {
    setModelPosition(newPosition);
  }

  useEffect(() => {
    localStorage.setItem(COORDS, JSON.stringify(modelPosition));
  }, [modelPosition])

  return (
    <div className="h-screen">
      <Header 
        setModelPosition={updateModelPosition} 
      />
      
      <DisplayModel
        modelPosition={modelPosition} 
        setModelPosition={updateModelPosition}
      />
      
      <Footer />
    </div>
  )
}

export default Home;