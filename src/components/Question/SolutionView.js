import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function SolutionView({
  data,
  goToNextQuestion,
  isCorrect,
  Counter,
}) {
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
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      ></motion.div>
      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
        >
          <Counter />
          <h1>{isCorrect ? "Richtig!" : "Leider falsch ..."}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.solution }}></div>
          <div className="btn" onClick={(e) => goToNextQuestion()}>
            weiter
          </div>
        </motion.div>
      </div>
    </div>
  );
}
