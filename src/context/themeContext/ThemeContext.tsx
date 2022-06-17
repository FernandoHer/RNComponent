/* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */

import React, { createContext } from 'react';

interface ThemeContextProps {
    theme: any,
    setDarkTheme: () => void,
    setLigthTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) =>{
    const theme = {};
    const setDarkTheme = () => {
        console.log('setDarkTheme');
    };
    const setLigthTheme = () => {
        console.log('setLigthTheme');
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLigthTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
