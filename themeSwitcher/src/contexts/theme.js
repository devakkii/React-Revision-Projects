import { useContext } from "react";
import { createContext } from "react";

export const themeContext = createContext({
    themeMode : '',
    lightTheme:{},
    darkTheme:{},

})

export const ThemeProvider = themeContext.Provider

export function useTheme(){
    return useContext(themeContext)
}