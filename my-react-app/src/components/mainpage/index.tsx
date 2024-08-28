import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../helper/apihelper.ts';
import { setMovies } from '../redux/actions/moviesactions.ts';
import { selectMovies } from '../redux/selectors/moviesselector.ts';
import MovieCard from '../moviecard/moviecard.tsx';
import { IMovie } from '../types/movietypes.ts';
import './styles.scss'

interface MainPageProps {
  searchTerm: string;
}

export const MainPage: React.FC<MainPageProps> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies(searchTerm || 'batman');
      dispatch(setMovies(movies));
    };

    fetchData();
  }, [dispatch, searchTerm]);

 
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="cardcontainer">
        {currentMovies.map((movie: IMovie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {movies.length > moviesPerPage && (
        <div className="pagination">
          {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map((page) => (
            <button
              key={page}
              onClick={() => paginate(page + 1)}
              className={`pagination__button ${currentPage === page + 1 ? 'active' : ''}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;