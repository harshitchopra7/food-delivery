import React from 'react';
import './ProductCard.css';

function ProductCard() {
    return (
        <div className="product_card">
            <div className="product_card_img">
                Image
            </div>
            <div className="product_card_title">
                <p>Title</p>
            </div>
            <div className="product_card_ingredients">
                <p>Ingredients</p>
            </div>
        </div>
    )
}

export default ProductCard;
