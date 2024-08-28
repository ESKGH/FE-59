import React from 'react';
import { IMovie } from '../types/movietypes';
import { Link } from "react-router-dom";
import  './moviecard.module.scss';

interface MovieCardProps {
  movie: IMovie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={ 'movieCard' }>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;