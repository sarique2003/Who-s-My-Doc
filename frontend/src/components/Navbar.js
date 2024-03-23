import React from 'react';
import logo from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import {toast} from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let SetloggedIn = props.SetloggedIn;
  return (
    <div className='navbar'>
    {/* // <div className='flex justify-evenly'> */}
      <Link to='/'>
        <img src={logo} alt="Logo"  loading='lazy' />
      </Link>

      <nav className='nav-links'>
      {/* <nav> */}
        <ul className="flex gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
 

      <div className="auth-buttons">

        { !isLoggedIn &&
            <Link to ="/login">
                <button className='auth-button'>
                    Login
                </button>
            </Link>           
        }

         { !isLoggedIn &&
            <Link to ="/signup">
                <button className='auth-button'>
                    Signup
                </button>
            </Link>           
        }
          { isLoggedIn &&
            <Link to ="/">
                <button  className='auth-button' onClick={()=>{
                    SetloggedIn(false);
                    toast.success("Logged Out");
                }}>
                    LogOut
                </button>
            </Link>           
        }
          { isLoggedIn &&
            <Link to ="/dashboard">
                <button className='auth-button'>
                    Dashboard
                </button>
            </Link>           
        }
      </div>
      </nav>
    </div>

  
  );
}

export default Navbar;
