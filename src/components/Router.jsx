import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import App from "./App";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/restaurant/:restaurantId" element={<App />} />
        </Routes>
    </HashRouter>
  );
};

export default Router;
