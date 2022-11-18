import React from "react";
import { DisplayModel, DraggableBox, Footer, Header } from "./components";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <DisplayModel />
      <Footer />
    </div>
  )
}

export default App;