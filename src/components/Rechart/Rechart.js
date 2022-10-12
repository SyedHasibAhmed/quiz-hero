import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Rechart = () => {

    const data = [
        {
            name: 'Page A',
            Right: 8,
            Mark: 8,
            Wrong: 0,
        },
        {
            name: 'Page B',
            Right: 0,
            Mark: 8,
            Wrong: 8,
        },
        {
            name: 'Page C',
            Right: 7,
            Mark: 8,
            Wrong: 1,
        },
        {
            name: 'Page D',
            Right: 8,
            Mark: 8,
            Wrong: 0,
        },
        {
            name: 'Page E',
            Right: 8,
            Mark: 7,
            Wrong: 1,
        },
        {
            name: 'Page F',
            Right: 0,
            Mark: 8,
            Wrong: 8,
        },
        {
            name: 'Page G',
            Right: 7,
            Mark: 8,
            Wrong: 1,
        },
        {
            name: 'Page H',
            Right: 8,
            Mark: 8,
            Wrong: 0,
        },
        {
            name: 'Page I',
            Right: 8,
            Mark: 7,
            Wrong: 1,
        },

    ];

    return (
        <div>
            <BarChart
                width={1500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Mark" fill="#8884d8" />
                <Bar dataKey="Right" fill="#82ca9d" />
                <Bar dataKey="Wrong" fill="Black" />
            </BarChart>
        </div>
    );
};

export default Rechart;