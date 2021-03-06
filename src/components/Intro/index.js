import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../../util/dataProvider";
import { motion } from "framer-motion";
export default function Intro() {
  const { intro, resetPoints } = useData();
  const history = useHistory();
  return (
    <div className="container" id="Intro">
      <div className="inner">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
          src={intro.image}
        ></motion.img>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
        >
          {intro.headline}
        </motion.h1>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 0 }}
          className="text"
          dangerouslySetInnerHTML={{ __html: intro.text }}
        ></motion.div>
        <motion.div
          exit={{ opacity: 0, transition: { delay: 0 } }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="btn"
          onClick={() => {
            resetPoints();
            history.push("/frage/1");
          }}
          to="/frage/1"
        >
          {intro.buttonlabel}
        </motion.div>
      </div>
    </div>
  );
}
