import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { questions } from "../../util/data";
import { motion } from "framer-motion";
import QuestionView from "./QuestionView";
import SolutionView from "./SolutionView";

export default function Question() {
  const history = useHistory();
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState("");
  const [correctCount, setCorrectCount] = useState(0);

  const { id } = useParams();
  useEffect(() => {
    setAnswered(false);
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, answered]);
  const currentQuestion = questions[id - 1];

  const Counter = () => {
    return (
      <motion.div
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {id}/{questions.length}
      </motion.div>
    );
  };

  function answerQuestion(answer) {
    if (!answer.text) {
      setError("Bitte wähle eine Antwort aus.");
    } else {
      setError("");
      setIsCorrect(answer.isCorrect);
      if (answer.isCorrect) {
        localStorage.setItem(
          "correct",
          parseInt(localStorage.getItem("correct")) + 1
        );
      }
      setAnswered(true);
    }
  }
  function goToNextQuestion() {
    console.log(questions.length);
    console.log(id + 1);
    const nextQuestion = parseInt(id) + 1;
    if (nextQuestion > questions.length) {
      history.push("/abschluss");
    } else {
      history.push("/frage/" + nextQuestion);
    }
  }
  if (answered)
    return (
      <SolutionView
        isCorrect={isCorrect}
        data={currentQuestion}
        Counter={Counter}
        goToNextQuestion={goToNextQuestion}
      />
    );
  return (
    <QuestionView
      Counter={Counter}
      error={error}
      data={currentQuestion}
      answerQuestion={answerQuestion}
    />
  );
}
