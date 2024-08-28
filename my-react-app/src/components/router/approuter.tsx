import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../mainpage/index.tsx';
import { MovieDetail } from '../moviedetailpage';
import { NotFound } from '../notfoundpage/index';
import Header from '../header/header.tsx';

const AppRouter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<MainPage searchTerm={searchTerm} />} /> {/* Передаем searchTerm */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/profile" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;