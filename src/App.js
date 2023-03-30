import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";

function App() {
  const [user, setUser] = useState(0);

  const handleSignIn = () => {
    setUser(user + 1);
  };

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen onSignIn={handleSignIn} />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
