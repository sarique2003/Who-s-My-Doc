import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";
import './LoginForm.css'


const LoginForm = ({setIsLoggedIn}) => {
    const naviga = useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        username:"",
        password:"",
      
    })
    function Changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }


    function validatePassword(password) {
    
      return password.length >= 8;
  }


    function submitHandler(event){
      event.preventDefault();
  
      const isValidPassword = validatePassword(formData.password);
  
      if (!isValidPassword) {
          toast.error("Invalid password. Please try again.");
          return; 
      }
  
      setIsLoggedIn= true;
      toast.success("Successfully Logged in");
      const acc = {
        ...formData
      };
      console.log("printing")
      console.log(acc);
      naviga("/dashboard");
  }
  

    const[showPassword, setshowPassword]=useState(false);
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
             name = 'password'
            type= {showPassword ? ('text'):('password')}
            value={formData.password}
            onChange={Changehandler}
            required
          />
          <span onClick={()=>setshowPassword((prev)=>!prev)}>
            {showPassword ?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
          </span>

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


