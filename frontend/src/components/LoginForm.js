import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";
import './LoginForm.css'
import { useAuth } from '../context/auth';
import axios from 'axios';


const LoginForm = ({ setIsLoggedIn }) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    type: "patient",
    password: "",

  })
  function Changehandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }


  function validatePassword(password) {

    return password.length >= 8;
  }


  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      const res = await axios.post(`http://localhost:3000/login`, formData);
      console.log("Logged in response : ");
      console.log(res.data);

      if (res.data.status) {
        // toast.success(res.data.message);
        //authentication done so set the data
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })

        localStorage.setItem('auth', JSON.stringify(res.data));
        setIsLoggedIn = true;
     toast.success("Successfully Logged in");
        navigate('/doctordashboard');
      }
      else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.error("Error occurred during login:", error);
    }

    // const isValidPassword = validatePassword(formData.password);

    // if (!isValidPassword) {
    //   toast.error("Invalid password. Please try again.");
    //   return;
    // }

    // setIsLoggedIn = true;
    // toast.success("Successfully Logged in");
    // const acc = {
    //   ...formData
    // };
    // console.log("printing")
    // console.log(acc);
    // naviga("/dashboard");
  }


  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={submitHandler} >
        <div>
          <label>
            <p className='cas'>Email<sup>*</sup>
            </p>

            <input
              name='email'
              type="email"
              value={formData.email}
              onChange={Changehandler}
              placeholder='email@gmail.com'
              required
            />
          </label>
        </div>
        <div>
          <label> 
            <p className='cas'>Username<sup>*</sup>
            </p>
          <input 
          name='username'
            type="text"
            value={formData.username}
            onChange={Changehandler}
            placeholder='user_name123'
            required
          />
          </label>
        </div>
        <div className="password-toggle">
          <label>
            <p className='cas'>Password<sup>*</sup>
            </p>
            <input
              name='password'
              type={showPassword ? ('text') : ('password')}
              value={formData.password}
              onChange={Changehandler}
              required
            />
          <Link to ="#">
            <p className='linki'> Forgot password</p>
          </Link>
          </label>
        </div>
        <button className='cas' type="submit">Login</button>
      </form>
    </div>
  );
  }

export default LoginForm;


