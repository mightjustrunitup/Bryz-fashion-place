import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, priceUsd, priceGbp }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <div
                    className="product-image"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {!image && <span className="no-image">No Image</span>}
                </div>
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <div className="price-container">
                    <p className="price-gbp">£{priceGbp.toFixed(2)}</p>
                    <span className="price-separator">|</span>
                    <p className="price-usd">${priceUsd.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
