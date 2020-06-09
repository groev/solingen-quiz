import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import config from "./config";

export const DataContext = React.createContext({});
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [points, setPoints] = useState(0);

  const fetchData = () => {
    Axios.get(config.url + config.quizid).then((response) => {
      setData(response.data);
      setFetched(true);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updatePoints = () => {
    setPoints((oldPoints) => {
      const newPoints = oldPoints + 1;
      localStorage.setItem("correct", newPoints);
      return newPoints;
    });
  };

  const resetPoints = () => {
    localStorage.removeItem("correct");
    setPoints(0);
  };

  const exports = {
    intro: data.intro,
    questions: data.questions,
    outro: data.outro,
    impressum: data.impressum,
    fetched,
    points,
    updatePoints,
    resetPoints,
  };

  return (
    <DataContext.Provider value={exports}>{children}</DataContext.Provider>
  );
};
