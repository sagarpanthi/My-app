import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#b81d1d",
            main: "#b81d1d",
            dark: "b81d1d",
        },
        secondary: {
            light: "#b81d1d",
            main: "#b81d1d",
            dark: "#b81d1d",
        }
    },
    typography: {
        color: "#ffffff",
        useNextVariants: true,
    }

});

ReactDOM.render(
    <MuiThemeProvider theme={theme}><App/></MuiThemeProvider>,
    document.getElementById('root')
);
