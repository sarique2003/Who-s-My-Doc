import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";

const SignupForm=({setIsLoggedIn})=>{

    const naviga = useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",
        LastName:"",
        email:"",
        username:"",
        password:"",
        confirmpassword:"",
    })
    function Changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const[showPassword, setshowPassword]=useState(false);
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn=true;
        toast.success("Successfully created your account");
        naviga("/dashboard")

    }
    return(
       <div>
         <form onSubmit={submitHandler}>
               <div>
            <button>
                Patient
            </button>
            <button>
                Doctor
            </button>
            </div>
            <div>
            <label>
            <p>First Name <sup>*</sup> 
            </p>
            <input 
            name='firstname'
            type="text"
            value={formData.firstName}
            onChange={Changehandler}
            placeholder='Enter the First Name'
            required
          />
          </label>
          <label>
            <p>Last Name <sup>*</sup> 
            </p>
            <input 
            name='lastname'
            type="text"
            value={formData.LastName}
            onChange={Changehandler}
            placeholder='Enter the Last Name'
            required
          />
          </label>
            </div>
          
          <label>
            <p>Email <sup>*</sup> 
            </p>
            <input 
            name='email'
            type="email"
            value={formData.email}
            onChange={Changehandler}
            placeholder='Enter the email'
            required
          />
          </label>
          <label>
            <p> Username<sup>*</sup> 
            </p>
            <input 
            name='fusername'
            type="text"
            value={formData.username}
            onChange={Changehandler}
            placeholder='Enter the username'
            required
          />
          </label>
          <div>
          <label>
            <p>Password <sup>*</sup> 
            </p>
            <input 
            name='password'
            type={showPassword?("text"):("password")}
            value={formData.password}
            onChange={Changehandler}
            placeholder='Enter the Password'
            required
          />

            <span onClick={()=>setshowPassword((prev)=>!prev)}>
            {showPassword ?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
          </span>
          </label>
          <label>
            <p>Confirm Password <sup>*</sup> 
            </p>
            <input 
            name='password'
            type={showPassword?("text"):("password")}
            value={formData.confirmpassword}
            onChange={Changehandler}
            placeholder='Enter the Confirm Password'
            required
          />

            <span onClick={()=>setshowPassword((prev)=>!prev)}>
            {showPassword ?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
          </span>
          </label>
          </div>
         
       <button>
        Create Account
       </button>
        </form>
       </div>
 
    )
}
export default SignupForm;