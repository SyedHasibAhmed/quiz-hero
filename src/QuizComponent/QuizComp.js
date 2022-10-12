import React from 'react'
import { useState } from 'react';
import Toasts from '../components/Toasts/Toasts';
import './quizstyle.css'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "<p>React is mainly used&nbsp;for _______ (if needed, google it)</p>",
            Answers: [
                { Answer: "building  User Interface", isCorrect: true },
                { Answer: "building Database", isCorrect: false },
                { Answer: "building User Data Flow", isCorrect: false },
                { Answer: "building  Shop", isCorrect: false }
            ]
        },
        {
            Question: "<p>How do you declare a class called “myClass” in react?</p>",
            Answers: [
                { Answer: "className = “myClass”", isCorrect: true },
                { Answer: "class  = “myClass”", isCorrect: false },
                { Answer: "Class = “myClass”", isCorrect: false },
                { Answer: "I don’t know", isCorrect: false }
            ]
        },
        {
            Question: "<p>Which method will you use in react to display components for each object in an array?</p>",
            Answers: [
                { Answer: "map", isCorrect: true },
                { Answer: "filter", isCorrect: false },
                { Answer: "find", isCorrect: false },
                { Answer: "for", isCorrect: false }
            ]
        },
        {
            Question: "<p>How will create a state with a default value “JingaLala”?</p>",
            Answers: [
                { Answer: "const { name, setName } =  useState(“JingaLala”);", isCorrect: false },
                { Answer: "[name, setName] =  UseState(“JingaLala”);", isCorrect: false },
                { Answer: "const [name, setName] =  useState(“JingaLala”);", isCorrect: true },
                { Answer: "const ( name, setName ) =  useState(“JingaLala”);", isCorrect: false }
            ]
        },
        {
            Question: "<p>Why can’t we declare a class with the “class” keyword in React?</p>",
            Answers: [
                { Answer: "We  should use class instead of className", isCorrect: false },
                { Answer: "We can use any name ", isCorrect: false },
                { Answer: "class is a reserved keyword in javascript", isCorrect: true },
                { Answer: "We can use any name ", isCorrect: false }
            ]
        },
        {
            Question: "<p>What is&nbsp;&nbsp;JSX?</p>",
            Answers: [
                { Answer: "Javascript Html ", isCorrect: false },
                { Answer: "Javascript Http", isCorrect: false },
                { Answer: "Javascript XML", isCorrect: true },
                { Answer: "React XML", isCorrect: false }
            ]
        },
        {
            Question: "<p>When creating a component in React, the first letter of that function name should be in ____</p>",
            Answers: [
                { Answer: "Lowercase", isCorrect: false },
                { Answer: "I can use Both", isCorrect: false },
                { Answer: "Uppercase", isCorrect: true },
                { Answer: "I can use Both", isCorrect: false }
            ]
        },
        {
            Question: "<p>What is the correct way of creating a component in react?</p>",
            Answers: [
                { Answer: "function  nayika() { return <h3>Mousumi </h3>}", isCorrect: false },
                { Answer: "function  Nokiya()  [ return <h3> Mousumi <h3> ]", isCorrect: false },
                { Answer: "function  Nayika() { return <h3> Mousumi </h3>   }", isCorrect: true },
                { Answer: "function  Nayika() ( return <h3> Mousumi </h3> )", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questionbank.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <div className='app'>
            <h2>React-JavaScript-CSS-Github</h2>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                        <button type="submit" onClick={resetQuiz}> <Toasts></Toasts> </button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>{currentQuestion + 1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                                {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                            {Questionbank[currentQuestion].Answers.map((answer) =>
                            (
                                <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                            ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;