import React from 'react';
import './cartitem.css'
import rah from '../assets/trash-outline-svgrepo-com.svg'

function CartCard({ product }) {
    if (!product) return null;
    
    const image = product?.image || 'https://via.placeholder.com/300x300?text=No+Image';
    const name = product?.itemname || 'Unknown Item';
    const price = product?.price || 'N/A';
    const quantity = product?.quantity || 1;

    const handleQuantityChange = (e) => {
        const newQty = parseInt(e.target.value, 10);
        const savedCart = localStorage.getItem('shopping_cart');
        const cartItems = savedCart ? JSON.parse(savedCart) : [];

        // Map items and modify matching product id count
        const updatedCart = cartItems.map(item => 
            item.id === product.id ? { ...item, quantity: newQty } : item
        );

        localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const removeFromCart = (productId) => {
        const savedCart = localStorage.getItem('shopping_cart');
        const cartItems = savedCart ? JSON.parse(savedCart) : [];
        const updatedCart = cartItems.filter(item => item.id !== productId);
        
        localStorage.setItem('shopping_cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    return (
        <div className="cart-card">
            <img className="cart-card-image" src={image} alt={name} />
            <div className="cart-card-content">
                <h3 className="cart-card-name">{name}</h3>
                <p className="price">Price: ${typeof price === 'number' ? price.toFixed(2) : price}</p>
                
            </div>
            <div className="quantity-selector">
                    <label htmlFor={`qty-${product.id}`}>Qty: </label>
                    <select 
                        id={`qty-${product.id}`} 
                        value={quantity} 
                        onChange={handleQuantityChange}
                        className="qty-dropdown"
                    >
                        {[...Array(quantity).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>
            <button className="remove" onClick={() => removeFromCart(product.id)}>
                <img className="trash" src={rah}/>
            </button>
        </div>  
    );
}

export default CartCard;