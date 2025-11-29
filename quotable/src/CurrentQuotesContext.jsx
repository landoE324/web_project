import { createContext, useState } from "react";

export const CurrentQuotesContext = createContext();

export function CurrentQuotesProvider({ children }) {
  const [currentArray, setCurrentArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuote = currentArray.length > 0 ? currentArray[currentIndex] : null;

  return (
    <CurrentQuotesContext.Provider
      value={{
        currentArray,
        setCurrentArray,
        currentIndex,
        setCurrentIndex,
        currentQuote,
      }}
    >
      {children}
    </CurrentQuotesContext.Provider>
  );
}
