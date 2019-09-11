import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
   const [isDarkMode, setTheme ] = useState(true);

    const toggleTheme = () =>
        setTheme(!isDarkMode);

    return (
        <ThemeContext.Provider 
        value={{
            isDarkMode, 
            toggleTheme
         }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
