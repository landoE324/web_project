import { createContext, useState } from "react";

export const FolderContext = createContext();

export function FolderProvider({ children }) {
  const [folders, setFolders] = useState([
    // initial demo folder
    { name: "Favorites", cards: [] },
  ]);

  const addToFolder = (folderName, card) => {
    setFolders(prev => {
      const existing = prev.find(f => f.name === folderName);
      if (existing) {
        return prev.map(f =>
          f.name === folderName ? { ...f, cards: [...f.cards, card] } : f
        );
      } else {
        // create new folder
        return [...prev, { name: folderName, cards: [card] }];
      }
    });
  };

  return (
    <FolderContext.Provider value={{ folders, addToFolder }}>
      {children}
    </FolderContext.Provider>
  );
}
