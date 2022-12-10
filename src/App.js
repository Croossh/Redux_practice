import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order/:menu" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
