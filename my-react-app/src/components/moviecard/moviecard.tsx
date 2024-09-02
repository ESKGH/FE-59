import React from 'react';
import { IMovie } from '../types/movietypes';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/moviesactions';
import { selectFavorites } from '../redux/selectors/moviesselector';
import './moviecard.module.scss';

interface MovieCardProps {
  movie: IMovie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav: IMovie) => fav.imdbID === movie.imdbID);

  const handleAddFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite(movie));
    }
  };

  const handleRemoveFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    }
  };

  return (
    <div className={'movieCard'}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
      </Link>
      <button onClick={handleAddFavorite} disabled={isFavorite}>
        {isFavorite ? 'Already in Favorites' : 'Add to Favorites'}
      </button>
      {isFavorite && (
        <button onClick={handleRemoveFavorite}>
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default MovieCard;
