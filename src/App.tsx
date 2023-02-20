import { useState } from "react";

import { Quiz, quizData } from "./quizData";

import "./App.css";

const App = (): JSX.Element => {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuizData: Quiz = quizData[currentQuiz];

  const handleAnswerSelect = (answer: string) => setSelectedAnswer(answer);

  const handleQuizSubmit = () => {
    if (selectedAnswer === currentQuizData.correct) setScore(score + 1);
    setSelectedAnswer(null);
    setCurrentQuiz(currentQuiz + 1);
  };

  const renderQuiz = (): JSX.Element => {
    return (
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <h2 id="question">{currentQuizData.question}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="a"
                className="answer"
                checked={selectedAnswer === "a"}
                onChange={() => handleAnswerSelect("a")}
              />
              <label htmlFor="a" id="a_text">
                {currentQuizData.a}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="b"
                className="answer"
                checked={selectedAnswer === "b"}
                onChange={() => handleAnswerSelect("b")}
              />
              <label htmlFor="b" id="b_text">
                {currentQuizData.b}
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="answer"
                id="c"
                className="answer"
                checked={selectedAnswer === "c"}
                onChange={() => handleAnswerSelect("c")}
              />
              <label htmlFor="c" id="c_text">
                {currentQuizData.c}
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="answer"
                id="d"
                className="answer"
                checked={selectedAnswer === "d"}
                onChange={() => handleAnswerSelect("d")}
              />
              <label htmlFor="d" id="d_text">
                {currentQuizData.d}
              </label>
            </li>
          </ul>
        </div>
        <button id="submit" onClick={handleQuizSubmit}>
          Submit
        </button>
      </div>
    );
  };

  const renderResult = (): JSX.Element => {
    return (
      <div className="quiz-container" id="quiz">
        <h2>
          You answered {score}/{quizData.length} questions correctly
        </h2>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  };

  return currentQuiz < quizData.length ? renderQuiz() : renderResult();
};

export default App;
