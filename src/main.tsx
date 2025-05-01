import React from "react";
import { OverlayGrid } from "./components/grid";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <OverlayGrid />
    </React.StrictMode>,
);
