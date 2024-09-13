import React from 'react';
import PersistentDrawerLeft from "./Components/NavDrawer.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#263846',
        },
        secondary: {
            main: '#01807e',
        },
    },
});

export default function App(){
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <PersistentDrawerLeft/>

            </ThemeProvider>
        </div>)
}