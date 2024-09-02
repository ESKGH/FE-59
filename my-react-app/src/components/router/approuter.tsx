import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../mainpage/index.tsx';
import { MovieDetail } from '../moviedetailpage';
import { NotFound } from '../notfoundpage/index';
import Profile from '../profile/index.tsx';
import Header from '../header/header.tsx'; 
import SignUp from '../sign-up/index.tsx';
import Success from '../sign-up-success/index.tsx';
import TryAgain from '../sign-up-tryagain/index.tsx';

const AppRouter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<MainPage searchTerm={searchTerm} />} /> 
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/try-again" element={<TryAgain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;