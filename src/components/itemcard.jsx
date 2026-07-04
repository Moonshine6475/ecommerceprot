import React from 'react';
import './itemcard.css';
import { useNavigate } from 'react-router-dom';

function ItemCard({ product }) {
    if (!product) return null;
    
    const image = product?.image || 'https://via.placeholder.com/300x300?text=No+Image';
    const name = product?.itemname || 'Unknown Item';
    const price = product?.price || 'N/A';
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Navigates to /product/123, /product/456, etc.
        navigate(`/product/${product.id}`);
    };

  return (
    <div className="item-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img className="item-card-image" src={image} alt={name} />
      <div className="item-card-content">
        <h3 className="item-card-name">{name}</h3>
        <p className="price">Price: ${typeof price === 'number' ? price.toFixed(2) : price}</p>
      </div>
    </div>  
    );
}

export default ItemCard;