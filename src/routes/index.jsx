import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Meal from "../pages/Meal";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
      <Route element={<Meal />} path="/meal/:id" />
    </Routes>
  );
};

export default AppRouter;
