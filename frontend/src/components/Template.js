import React from 'react';
import Signup from '../pages/signup';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

// yaha ek cheez aurr add karna hai like img
const Template = ({title , descrip1, descrip2,formtype,setIsLoggedIn}) => {
  return (
    <div>
      <div>

        <h1>{title}</h1>
        <p>
            <span>{descrip1}</span>
            <span>{descrip1}</span>
        </p>
        {formtype === 'signup'?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
    <div>
        <div>
        </div>
        <p>OR</p>
        <div>    
        </div>
    </div>
      <button>
        <p>Sign up with Google</p>
      </button>
      </div>
    </div>
  );
}

export default Template;
