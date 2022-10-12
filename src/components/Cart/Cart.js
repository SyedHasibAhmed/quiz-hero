import React from 'react';
import './Cart.css'

const Cart = ({ topic }) => {
    const { logo, name } = topic.data;
    return (
        <div>
            <h2>Name : {name}</h2>
            <img src={logo}></img>
        </div>
    );
};

export default Cart;