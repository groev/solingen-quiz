import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuestionView({ data, answerQuestion, error, Counter }) {
  useEffect(() => {
    new Image().src = data.image;
  }, [data.image]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  function selectAnswer(answer) {
    setSelectedAnswer(answer);
  }
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    exit: { opacity: 0 },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div id="QuestionView" className="container">
      <div className="inner">
        <div className="question">
          <Counter />
          <motion.h1
            transition={{ delay: 0.5 }}
            exit={{ y: -100, opacity: 0 }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {data.question}
          </motion.h1>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="answers"
        >
          {data.answers.map((answer, idx) => {
            return (
              <motion.div
                onClick={(e) => selectAnswer(answer)}
                variants={item}
                key={idx}
                className="answer"
              >
                <div
                  className={
                    selectedAnswer.text === answer.text
                      ? "radio checked"
                      : "radio"
                  }
                />
                <label htmlFor={"answer" + idx}>{answer.text}</label>
              </motion.div>
            );
          })}
        </motion.div>
        {error && (
          <motion.div
            className="error"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}
        <motion.div
          onClick={(e) => answerQuestion(selectedAnswer)}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          exit={{ opacity: 0, y: 100 }}
          className="btn"
        >
          Weiter
        </motion.div>
      </div>
    </div>
  );
}
