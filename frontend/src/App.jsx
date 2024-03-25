import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Patientpages from "./Components/Patient.jsx/Patientpages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="" element={<Patientpages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
