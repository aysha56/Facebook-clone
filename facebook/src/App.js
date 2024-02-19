import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;