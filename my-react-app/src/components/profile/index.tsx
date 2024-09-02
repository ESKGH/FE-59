import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors/moviesselector.ts';
import { IMovie } from '../types/movietypes.ts';
import './styles.scss';

const Profile: React.FC = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <h2>Welcome to your profile!</h2>
      <h3>Your Favorites:</h3>
      <div className="favorites-container">
        {favorites.length > 0 ? (
          favorites.map((movie: IMovie) => (
            <div key={movie.imdbID} className="favorite-movie">
              <img src={movie.Poster} alt={movie.Title} />
              <h4>{movie.Title}</h4>
            </div>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;