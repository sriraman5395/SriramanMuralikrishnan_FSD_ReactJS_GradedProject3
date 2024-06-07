
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function SearchResults({ searchResults }) {
  const navigate = useNavigate();

  const handleCardClick = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  if (!searchResults || searchResults.length === 0) {
    return <div>No search results found.</div>;
  }

  return (
    <div className="movie-cards-fav">
      {searchResults.map((movie, index) => (
        <Card style={{ width: '18rem', margin: '10px' }} key={index}>
          <Card.Img variant="top" src={movie.posterurl} style={{ height: '300px' }} onClick={() => handleCardClick(movie.id)} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="storyline">
              <strong>Storyline:</strong> {movie.storyline}
            </Card.Text>
            <Card.Text>
              <strong>Release Date:</strong> {movie.releaseDate}
            </Card.Text>
            <Card.Text>
              <strong>Genres:</strong> {movie.genres.join(', ')}</Card.Text>
            <Card.Text>
              <strong>Actors:</strong> {movie.actors.join(', ')}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SearchResults;
