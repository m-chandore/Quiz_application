import React from 'react'
import questions from './QuestionData'

const QuizResult = (props) => {
  return (
    <div className='score-section'>
      <h3>Your answers are submitted</h3>
      <h4> Total score {props.score}/100</h4>
      <h4> You answered {props.correctAnswer} questions correctly out of {questions.length} </h4>
      <button onClick={props.handleReload}> Reatempt  </button>
    </div>
  )
}

export default QuizResult
