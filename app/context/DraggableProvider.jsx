import { createContext } from "react";

export const DraggableContext = createContext();

export const DraggableProvider = ({ children }) => {
  const editing = true;
  return <DraggableContext.Provider value={{ editing }}>
    {children}
  </DraggableContext.Provider>
}
