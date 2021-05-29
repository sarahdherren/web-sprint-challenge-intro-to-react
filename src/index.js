// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';
import themeObject from './theme/index';
import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
    <ThemeProvider theme={themeObject}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);


