import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navigation}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route
          path="/watchlist"
          render={() => {
            return <Watchlist />;
          }}
        ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
