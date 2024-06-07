// src/components/MovieDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moviesData from '/json/data.json';
 // Ensure you have styles for the component

function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  console.log("Movie ID from URL:", movieId);

  const movie = [...(moviesData["movies-coming"] || []), ...(moviesData["movies-in-theaters"] || []),...(moviesData["top-rated-movies"] || [])].find(movie => movie.id === movieId);

  console.log('movie:', movie);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div >
      <div className="go-back-button">
        <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    <div className="movie-detail-container">

      <Card className="movie-detail-card">
        <Card.Img variant="top" src={movie.posterurl} className="movie-detail-img" />
      </Card>
      <div className="movie-detail-info">
        <h2>{movie.title}</h2>
        <p><strong>Storyline:</strong> {movie.storyline}</p>
        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
        <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
        <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
      </div>
      </div>
    </div>
  );
}

export default MovieDetail;
