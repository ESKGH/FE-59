const API_KEY = '92ff7663';

export const fetchMovies = async (query: string) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
