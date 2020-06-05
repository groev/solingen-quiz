import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { questions } from "../../data";
import QuestionView from "./QuestionView";
import SolutionView from "./SolutionView";

export default function Question() {
  const history = useHistory();
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();
  useEffect(() => {
    setAnswered(false);
  }, [id]);
  const currentQuestion = questions[id - 1];

  function answerQuestion(answer) {
    if (!answer.text) {
      setError("Bitte wähle eine Antwort aus.");
    } else {
      setError("");
      setIsCorrect(answer.isCorrect);
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
        goToNextQuestion={goToNextQuestion}
      />
    );
  return (
    <QuestionView
      error={error}
      data={currentQuestion}
      answerQuestion={answerQuestion}
    />
  );
}
