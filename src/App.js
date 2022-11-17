import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from "./pages";
import Root from "./Root";

function App() {
  return (
    <div className="app overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
