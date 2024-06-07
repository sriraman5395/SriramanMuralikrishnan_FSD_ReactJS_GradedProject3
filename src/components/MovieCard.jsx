import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moviesData from '/json/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ onAddToFavorites, favorites }) {
  const navigate = useNavigate();

  const handleCardClick = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return (
    <div className="movie-cards">
      {moviesData["movies-coming"].map((movie, index) => (
        <Card className="movie-card" style={{ width: '18rem', margin: '10px' }} key={index}>
          <Card.Img
            variant="top"
            src={movie.posterurl}
            style={{ height: '300px', cursor: 'pointer' }}
            onClick={() => handleCardClick(movie.id)}
          />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card.Title>{movie.title}</Card.Title>
            <Button 
              variant="light" 
              onClick={() => onAddToFavorites(movie)} 
              disabled={isFavorite(movie.id)}
              style={{ alignSelf: 'center', color: 'black' }}
            >
              {isFavorite(movie.id) ? 'Added to Favorites' : (
                <span>
                  Add to Favorites 
                  <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: '#ff0000', marginLeft: '5px' }} />
                </span>
              )}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MovieCard;
