import React from 'react';

// QUESTION COMPONENT (input: array of objects)
const QuestionBox = ({ question, answer, onSelect }) => {
  const { questions, answers } = question;
  return (
    <div>
      <p>
        {question.question}
        <br/>
        {answers.map((text, index) => (
          <button
            className='btn btn-info'
            key={index}
            onClick={() => {
              onSelect(text);
            }}
          >
            {text}
          </button>
        ))}
      </p>
    </div>
  );
};
export default QuestionBox;