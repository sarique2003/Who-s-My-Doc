import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
  const naviga = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    age: '',
    sex: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  function Changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
   
    if(formData.password !=formData.confirmpassword){
      toast.error('invalid password');
    }
    else{
    toast.success('Successfully created your account');
    naviga('/dashboard');
    }
   
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <button>Patient</button>
          <button>Doctor</button>
        </div>
        <div>
          <label>
            <p>
               Name <sup>*</sup>{' '}
            </p>
            <input
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={Changehandler}
              placeholder="Enter the First Name"
              required
            />
          </label>
        </div>
        <label>
          <p>
            Age <sup>*</sup>{' '}
          </p>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={Changehandler}
            placeholder="Enter the age"
            required
          />
        </label>
        <label>
          <p>
            Sex <sup>*</sup>{' '}
          </p>
          <select
            name="sex"
            value={formData.sex}
            onChange={Changehandler}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Third Gender">Third Gender</option>
          </select>
        </label>
        <label>
          <p>
            Email <sup>*</sup>{' '}
          </p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={Changehandler}
            placeholder="Enter the email"
            required
          />
        </label>
        <label>
          <p>
            Username <sup>*</sup>{' '}
          </p>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={Changehandler}
            placeholder="Enter the username"
            required
          />
        </label>
        <div>
          <label>
            <p>
              Password <sup>*</sup>{' '}
            </p>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={Changehandler}
              placeholder="Enter the Password"
              required
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password <sup>*</sup>{' '}
            </p>
            <input
              name="confirmpassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmpassword}
              onChange={Changehandler}
              placeholder="Enter the Confirm Password"
              required
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
