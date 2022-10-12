import React from 'react';
import Card from 'react-bootstrap/Card';
import './Background.css'

const Home = () => {
    return (
        <>
            <Card>
                <Card.Img className='header-img' variant="top" src="https://media.istockphoto.com/vectors/quiz-neon-text-banner-on-brick-wall-questions-team-game-quiz-night-vector-id1223692043?k=20&m=1223692043&s=170667a&w=0&h=MXrR6XcdSGCYpzeSGxj7ANNzQfAcbXT-68cEjZ1dVzE=" />
                <Card.Body>
                    <Card.Text>
                        <h3> Quiz is the game of questions and answers that tests your knowledge.</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home;