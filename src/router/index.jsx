import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, Model } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/flam-assignment/" element={<Home />} />
      <Route path="/flam-assignment/model" element={<Model />} />
    </Routes>
  )
}

export default AppRouter