
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import Patientpages from './pages/Patientpages';
import Doctorpages from './pages/Doctorpages';
import { useState } from 'react';


function App() {

  const [isLoggedIn,setIsLoggedIn]= useState(false);
  return (

    <div className="w-screen h-screen flex flex-col">
    {/* // <div className="App"> */}

<Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 

    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ='/login' element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path ='/signup' element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path ='/patientdashboard' element = {<Patientpages setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path ='/doctordashboard' element = {<Doctorpages setIsLoggedIn={setIsLoggedIn}/>}/>
    </Routes>
    </div>
  );
}


export default App;
