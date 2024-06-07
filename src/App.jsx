// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieInTheatre from './components/MovieInTheatre';
import Navigation from './components/Navigation';
import TopRatedMovies from './components/TopRatedMovies';
import Favorites from './components/Favorites';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResult';
import Notification from './components/Notification';
import moviesData from '/json/data.json';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '' });

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some(fav => fav.id === movie.id)) {
        setNotification({ show: true, message: `${movie.title} has been added to favorites!` });
        setTimeout(() => setNotification({ show: false, message: '' }), 3000); 
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  const handleSearch = (query) => {
    if (query) {
      const allMovies = [
        ...(Array.isArray(moviesData['movies-in-theaters']) ? moviesData['movies-in-theaters'] : []),
        ...(Array.isArray(moviesData['movies-coming']) ? moviesData['movies-coming'] : []),
        ...(Array.isArray(moviesData['top-rated-indian']) ? moviesData['top-rated-indian'] : []),
        ...(Array.isArray(moviesData['top-rated-movies']) ? moviesData['top-rated-movies'] : [])
      ];

      const results = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleRemoveFavorite = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  return (
    <Router>
      <div>
        <Navigation onSearch={handleSearch} />
        <div className="app-container">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MovieCard onAddToFavorites={addToFavorites} favorites={favorites} />} />
              <Route path="/movie-in-theatre" element={<MovieInTheatre onAddToFavorites={addToFavorites} favorites={favorites} />} />
              <Route path="/top-rated-movies" element={<TopRatedMovies onAddToFavorites={addToFavorites} favorites={favorites} />} />
              <Route path="/favorites" element={<Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />} />
              <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
              <Route path="/search" element={<SearchResults searchResults={searchResults} />} />
            </Routes>
          </div>
          <Notification message={notification.message} show={notification.show} />
        </div>
      </div>
    </Router>
  );
}

export default App;
