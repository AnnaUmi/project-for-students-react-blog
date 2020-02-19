import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import TopBar from "./components/topBar";
import { CurrentUserProvider } from "./context/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

export default App;
