import React from 'react';
import { useAuth } from '../context/auth';

const Home = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className="mt-20">
      <pre>{JSON.stringify(auth.user, null)}</pre>
      <h1 style={{ marginTop: '40px',color: 'white'}} >Welcome to  Whos My Doc</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

export default Home;
