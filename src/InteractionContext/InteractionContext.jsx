import { createContext, useState } from "react";

export const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  return (
    <InteractionContext.Provider value={{ interactions, setInteractions }}>
      {children}
    </InteractionContext.Provider>
  );
};