import React from "react";
import { DisplayModel, DraggableBox, Footer, Header } from "./components";

const App = () => {
  return (
    <div className="h-screen grid grid-rows-7 gap-1 place-start">
      <Header />
      <DisplayModel />
      <Footer />
    </div>
  )
}

export default App;