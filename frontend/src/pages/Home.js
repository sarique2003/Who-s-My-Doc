import React from 'react';
import { useAuth } from '../context/auth';

const Home = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div>
      <pre>{JSON.stringify(auth.user, null)}</pre>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

export default Home;
