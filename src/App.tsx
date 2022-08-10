import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { routes } from "./setting/index";
import { LNB } from "./Components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LNB />
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => {
            const { path, element } = route;

            return (
              <Route
                key={i}
                path={path}
                // FIXME type
                element={element as unknown as React.ReactNode}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
