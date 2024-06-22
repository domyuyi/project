import React, { StrictMode } from "react";
import {createRoot} from "react-dom/client";
//import "./styles.css";


const root = createRoot(document.getElementById("root"));
root.render (
    <StrictMode>
        <h1>Titulo de aplicacion </h1>
    </StrictMode>
);