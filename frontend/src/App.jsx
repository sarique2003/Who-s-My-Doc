import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Patientpages from "./Components/Patient.jsx/Patientpages";
import Doctorpages from "./Components/Doctor/Doctorpages";

import Home from "./Components/Homepage/Home";
import PatientProfile from "./Components/Patient.jsx/PatientProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/doctor" element={<Doctorpages />} />
        <Route exact path="" element={<Home />} />
        <Route exact path="" element={<Patientpages />} />
        <Route exact path="/patient-profile" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
