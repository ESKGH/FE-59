import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


const Success = () => {
  return <div className='success-container'>
    <h2>Registration successful!</h2>
    <Link to="/profile">Profile</Link>
    </div>;
};

export default Success;