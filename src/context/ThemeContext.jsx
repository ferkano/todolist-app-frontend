import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";

//creamos el contexto
export const ThemeContext = createContext();

const initialTheme = "Light";

//creamos proveedor
export const ThemeContextProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useState(initialTheme);
  const values = { contextTheme, setContextTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
//creamos el customHook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
