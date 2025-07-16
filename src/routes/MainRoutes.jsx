import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ArmorH1 from "../pages/ArmorH1";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ArmorH1 />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
