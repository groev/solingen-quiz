import React from "react";
import "./assets/styles/App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { useData } from "./util/dataProvider";
import { Loader } from "./components/common";
import { Layout, Intro, Outro, Question, Impressum } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const { fetched } = useData();
  let location = useLocation();
  if (!fetched) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Layout>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/frage/:id" component={Question} />
            <Route path="/abschluss" component={Outro} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/" component={Intro} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
