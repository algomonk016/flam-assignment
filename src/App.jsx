import React, { useState } from "react";
import { DisplayModel, Footer, Header } from "./components";

const App = () => {

  const [modelPosition, setModelPosition] = useState({ x: 0, y: 0 });

  const updateModelPosition = (newPosition) => {
    setModelPosition(newPosition);
  }

  return (
    <div className="h-screen">
      <Header modelPosition={modelPosition} setModelPosition={updateModelPosition} />
      <DisplayModel modelPosition={modelPosition} setModelPosition={updateModelPosition}  />
      <Footer />
    </div>
  )
}

export default App;