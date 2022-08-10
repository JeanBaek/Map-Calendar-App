import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "./setting/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
