import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();


    if (email && password) {
      navigate('/success');
    } else {
      navigate('/try-again');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Register</h2>
      <form className='signup-container-form' onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
