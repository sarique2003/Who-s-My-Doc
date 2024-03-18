import React from 'react';
import Template from '../components/Template';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
     title="Very Warm Welcome to you"
     descrip1=""
     descrip2=""
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
