import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function SolutionView({ data, goToNextQuestion, isCorrect }) {
  const { id } = useParams();
  return (
    <div id="SolutionView" className="container">
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: "url(" + data.image + ")" }}
        className="image"
        exit={{ opacity: 0 }}
      ></motion.div>
      <div className="content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{isCorrect ? "Richtig!" : "Leider falsch ..."}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.solution }}></div>
          <button className="btn" onClick={(e) => goToNextQuestion()}>
            weiter
          </button>
        </motion.div>
      </div>
    </div>
  );
}
