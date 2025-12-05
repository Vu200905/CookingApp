import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    setFavorites(prev => [...prev, recipe]);
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
