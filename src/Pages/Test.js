import React, { useState } from 'react'
import { questions } from "../components/Questions";
import ShowResults from "../components/ShowResults"

const Test = () => {
  //Properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Helper functions
  const optionClicked = (isCorrect) => {
    if(isCorrect){
        setScore(score + 1)
    }
    if(currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
    } else{
        setFinalResults(true);
    }
  }  
  console.log(score)

  return (
    <div>
        { showFinalResults ? (
            <ShowResults score={score} maxScore={currentQuestion + 1}/>
        ) : (
            <div className="question-card">
                <h2>Question # {currentQuestion + 1}/{questions.length}</h2>
                <h3>{questions[currentQuestion].title}</h3>
                <ul className="option-list">
                    {questions[currentQuestion].options.map((option) => {
                        return(
                            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                        );
                    })}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Test