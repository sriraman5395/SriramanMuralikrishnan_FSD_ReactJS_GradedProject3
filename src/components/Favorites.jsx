import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Favorites({ favorites, onRemoveFavorite }) {
    const navigate = useNavigate();

    const handleCardClick = (movieId) => {
      console.log(movieId)
      navigate(`/movie-detail/${movieId}`);
    };
  
  console.log('Favorites:', favorites);

  if (!favorites || !Array.isArray(favorites)) {
    return <div>No favorites available.</div>;
  }

  return (
    <div>
      <div className="movie-cards-fav">
        {favorites.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          favorites.map((favor, index) => (
            <Card className="movie-card" style={{ width: '18rem', margin: '10px' }} key={index}>
              <Card.Img variant="top" src={favor.posterurl} style={{ height: '300px' }} onClick={() => handleCardClick(favor.id)} />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Card.Title>{favor.title}</Card.Title>
              
                <Button variant="danger" onClick={() => onRemoveFavorite(favor.id)}  style={{ alignSelf: 'center', color: 'white' }}>
                  Remove from Favorites
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
};

export default Favorites;
