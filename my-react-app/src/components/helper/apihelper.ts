const API_KEY = '92ff7663';

export const fetchMovies = async (query: string) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
};