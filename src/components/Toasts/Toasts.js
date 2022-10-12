import React from 'react';
import Toast from 'react-bootstrap/Toast';

const Toasts = () => {
    return (
        <div>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto"><h1>Quiz-Hero</h1></strong>
                </Toast.Header>
                <Toast.Body> <h3>Play Again!!.</h3> </Toast.Body>
            </Toast>
        </div>
    );
};

export default Toasts;