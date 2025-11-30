import { createContext, useState, useEffect } from "react";

export const RecentContext = createContext();

export function RecentProvider({ children }) {
  const [recent, setRecent] = useState(() => {
    const saved = localStorage.getItem("recentCards");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("recentCards", JSON.stringify(recent));
  }, [recent]);

  // Add a new card
  function addRecent(card) {
    setRecent(prev => {
      // Remove if already exists
      const filtered = prev.filter(item => item.name !== card.name);

      // Add card to the front
      const updated = [card, ...filtered];

      // Restrict to size 4
      return updated.slice(0, 4);
    });
  }

  return (
    <RecentContext.Provider value={{ recent, addRecent }}>
      {children}
    </RecentContext.Provider>
  );
}
