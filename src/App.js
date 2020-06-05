import React from "react";
import "./assets/styles/App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { Intro, Outro, Question } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/frage/:id" component={Question} />
          <Route path="/abschluss" component={Outro} />
          <Route path="/" component={Intro} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
