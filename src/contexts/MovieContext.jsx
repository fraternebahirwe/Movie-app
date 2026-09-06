import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Initialisation sécurisée de l'état
  const [favorites, setFavorites] = useState(() => {
    try {
      const localData = localStorage.getItem("favorites");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Erreur de lecture du localStorage :", error);
      return [];
    }
  });

  // Sauvegarde automatique dans le localStorage
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Erreur d'écriture dans le localStorage :", error);
    }
  }, [favorites]);

  // Évite d'ajouter deux fois le même film
  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  // Suppression basée sur l'ID
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== movieId));
  };

  // Vérifie si un film est déjà en favori
  const isFavorite = (movieId) => {
    return favorites.some((item) => item.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
