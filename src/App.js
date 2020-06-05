import React from "react";
import "./assets/styles/App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout, Intro, Outro, Question, Impressum, Info } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Layout>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/frage/:id" component={Question} />
            <Route path="/abschluss" component={Outro} />
            <Route path="/informationen" component={Info} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/" component={Intro} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
