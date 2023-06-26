import React, { useState } from 'react'
import './Quiz.css'
import questions from './QuestionData'
import QuizResult from './QuizResult';

const Quiz = () => {
    const [currentQuestion, setCurrentQuesion] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 20)
            setCorrectAnswer(correctAnswer + 1)
        }
        setClicked(true)
    }

    const handleNextOption = () => {
        setClicked(false)
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuesion(nextQuestion)
        }
        else {
            setShowResult(true)
        }
    }

    const handleReload = () => {
        setCurrentQuesion(0)
        setScore(0)
        setCorrectAnswer(0)
        setShowResult(false)
    }

    return (
        <>
            <div className='app'>
                {showResult ? (<QuizResult score={score} correctAnswer={correctAnswer} handleReload={handleReload} />) : (<>
                    <div className='question-section'>
                        <h4>Score:{score}</h4>
                        <div className='question-count'>
                            <span> Question {currentQuestion + 1}/{questions.length}</span>
                        </div>
                        <div className='question-text'>
                            {questions[currentQuestion].question}
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].options.map((answer, index) => {
                                return ( 
                                 <button className={`button ${clicked &answer.isCorrect?"correct":"button"}`}
                                 disabled={clicked} key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                                    {answer.label}</button>)
                            })}


                            <div className='actions'>
                                <button onClick={handleReload}>reload</button>
                                <button disabled={!clicked} onClick={handleNextOption}>next</button>
                            </div>
                        </div>
                    </div>
                </>)}

            </div>
        </>
    )
}

export default Quiz
