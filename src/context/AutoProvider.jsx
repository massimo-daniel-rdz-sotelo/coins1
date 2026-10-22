import { useCallback, useEffect, useMemo, useState } from "react";
import { ContexAutor } from "./ContexAutor";

export const AutoProvider = ({ children }) => {
  const [autor, setAutor] = useState("Yazhwhan");
  const [favoriteCoins, setFavoriteCoins] = useState(() => {
    try {
      const storedFavorites = JSON.parse(
        window.localStorage.getItem("favoriteCoins") || "[]",
      );
      return Array.isArray(storedFavorites)
        ? storedFavorites.filter(
            (favorite) =>
              typeof favorite === "string" ||
              (favorite && typeof favorite === "object"),
          )
        : [];
    } catch (error) {
      console.error("No se pudieron cargar las monedas favoritas:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("favoriteCoins", JSON.stringify(favoriteCoins));
    } catch (error) {
      console.error("No se pudieron guardar las monedas favoritas:", error);
    }
  }, [favoriteCoins]);

  const toggleFavorite = useCallback((coin) => {
    setFavoriteCoins((currentFavorites) =>
      currentFavorites.some(
        (favorite) =>
          (typeof favorite === "string" ? favorite : favorite.id) === coin.id,
      )
        ? currentFavorites.filter(
            (favorite) =>
              (typeof favorite === "string" ? favorite : favorite.id) !==
              coin.id,
          )
        : [...currentFavorites, coin],
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      autor,
      setAutor,
      favoriteCoins,
      setFavoriteCoins,
      toggleFavorite,
    }),
    [autor, favoriteCoins, toggleFavorite],
  );

  return (
    <ContexAutor.Provider value={contextValue}>{children}</ContexAutor.Provider>
  );
};
