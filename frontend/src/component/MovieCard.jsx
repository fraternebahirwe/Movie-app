import "../css/MovieCard.css";

function MovieCard({ movie, isFavorite = false, onToggleFavorite }) {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(movie);
    } else {
      alert(`Clicked ${movie.title}`);
    }
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster+Available";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button 
            className={`favorite-btn ${isFavorite ? "active" : ""}`} 
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
      </div>
    </div>
  );
}

export default MovieCard;
