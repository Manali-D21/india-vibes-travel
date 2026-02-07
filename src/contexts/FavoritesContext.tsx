import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (destinationId: string) => void;
  isFavorite: (destinationId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem("indiaVibesFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (destinationId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(destinationId)
        ? prev.filter((id) => id !== destinationId)
        : [...prev, destinationId];

      localStorage.setItem("indiaVibesFavorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (destinationId: string) =>
    favorites.includes(destinationId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
