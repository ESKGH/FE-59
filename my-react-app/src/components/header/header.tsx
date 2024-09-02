import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/searchbar.tsx'; 
import './styles.scss';


interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;