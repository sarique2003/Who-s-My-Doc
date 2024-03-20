import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from 'axios';
import { useAuth } from '../context/auth';


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

        navigate('/');
      }
      else {
        toast.error(res.data.message);
      }

    } catch (error) {

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
    <div>
      <form onSubmit={submitHandler} >
        <div>
          <label>
            <p>Email<sup>*</sup>
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
        {/* <div>
          <label> 
            <p>Username<sup>*</sup>
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
        </div> */}
        <div>
          <label>
            <p>Password<sup>*</sup>
            </p>
            <input
              name='password'
              type={showPassword ? ('text') : ('password')}
              value={formData.password}
              onChange={Changehandler}
              required
            />

            <span onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>

            <Link to="#">
              <p> Forgot password</p>
            </Link>
          </label>
        </div>

        <div>
          <label>
            <p>Type <sup>*</sup>{' '}</p>
            <select
              name="type"
              value={formData.type}
              onChange={Changehandler}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
