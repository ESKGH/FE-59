import React from 'react';
import './styles.scss';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search for a movie..."
      className="search-input"
    />
  );
};

export default SearchBar;