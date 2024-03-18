import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";


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
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn=true;
        toast.success("Successfully Logged in");
        naviga("/dashboard")

    }

    const[showPassword, setshowPassword]=useState(false);
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
        <div>
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
        </div>
        <div>
          <label>
            <p>Password<sup>*</sup>
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
            <p> Forgot password</p>
          </Link>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
