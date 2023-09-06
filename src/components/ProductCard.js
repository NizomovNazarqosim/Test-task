import React from "react";

import "./ProductCard.css";

const ProductCard = ({  title, price }) => {
    const addToStorage = ({title, price, quantity}) => {
    const all = JSON.parse(window.localStorage.getItem('products')) || []

    all.push({title:title, price:price, quantity:quantity})
    localStorage.setItem('products', JSON.stringify(all))
    }


    return (
        <div className='card'>
            <div className='card_image'>
                <img src='https://picsum.photos/200/300' alt={title} />
            </div>
            <div className='card_info'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <button onClick={() => addToStorage({title, price, quantity:1})}  className="add-list">Add to list</button>
            </div>
        </div>
    );
};

export default ProductCard;