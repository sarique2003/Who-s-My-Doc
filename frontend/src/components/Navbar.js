import React from 'react';
import logo from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { toast } from "react-hot-toast";
import { useAuth } from '../context/auth';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let SetloggedIn = props.SetloggedIn;
  const [auth, setAuth] = useAuth();
  //log out handler
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem('auth');
    toast.success("Logged Out successfully")
  }
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="Logo" loading='lazy' />
      </Link>

      <nav className='nav-links'>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        {!auth.user &&
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        }

        {!auth.user &&
          <Link to="/signup">
            <button>
              Signup
            </button>
          </Link>
        }
        {auth.user &&
          <Link to="/">
            <button onClick={handleLogout}>
              LogOut
            </button>
          </Link>
        }
        {auth.user &&
          <Link to="/dashboard">
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>


  );
}

export default Navbar;
