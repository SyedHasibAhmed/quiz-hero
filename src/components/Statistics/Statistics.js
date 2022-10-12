import React from 'react';
import './Statistics.css'
import Background from '../Background/Background'
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';

const Statistics = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <Background></Background>
            <h2> Total quiz : {quiz.data.total}</h2>
            <Rechart></Rechart>
        </div>
    );
};

export default Statistics;