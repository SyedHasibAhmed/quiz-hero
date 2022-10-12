import React from 'react';
import Background from '../Background/Background';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    return (

        <div>
            <Background></Background>
            <br></br>
            {/* <h2>h : {topics.data.length}</h2> */}

            {/* {
                topics.data.map(topic => <Topics
                    key={topic.data[0].id}
                    topic={topic.data[0]}
                ></Topics>)
            } */}

            <br />
            <div >
                <CardGroup>

                    <Card>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png" />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                        </Card.Body>
                        <Button variant="dark"><Link to="/quiz">Go Quiz-Hero</Link></Button>
                    </Card>
                    <br />
                    <Card>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52412638962_12e932256a_o.png" />
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                        </Card.Body>
                        <Button variant="dark"><Link to="/quiz">Go Quiz-Hero</Link></Button>
                    </Card>
                    <br />
                    <Card>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png" />
                        <Card.Body>
                            <Card.Title>CSS</Card.Title>
                        </Card.Body>
                        <Button variant="dark"><Link to="/quiz">Go Quiz-Hero</Link></Button>

                    </Card>
                    <br />
                    <Card>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                        <Card.Body>
                            <Card.Title>Git</Card.Title>
                        </Card.Body>
                        <Button variant="dark"><Link to="/quiz">Go Quiz-Hero</Link></Button>
                    </Card>

                </CardGroup>
            </div>

        </div>
    );
};

export default Topics;