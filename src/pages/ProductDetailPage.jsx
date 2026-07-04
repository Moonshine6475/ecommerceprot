import React, { useState, useEffect } from 'react';
import './productDetailPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation';
import products from '../assets/data/products.json'
import cartbut from '../assets/cart.png'
import backbtn from '../assets/back.png'

function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find(p => p.id == id);
    if (!product) {
        return <h2>Product not found!</h2>;
    }
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/product');
    }; 
    const [cart, setCart] = useState(() => {
            const savedCart = localStorage.getItem('shopping_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        });
      useEffect(() => {
            localStorage.setItem('shopping_cart', JSON.stringify(cart));
            window.dispatchEvent(new Event('cartUpdated'));
        }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {

            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {

                return prevCart.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            }


            return [...prevCart, { ...product, quantity: 1 }];
        });
        
        console.log(cart)
    }

  return (
    <div className="everything">
    <Navigation cart = {cart}/>    
        <div className="product-detail">
            <h1>{product.itemname}</h1>
            
            <div className="stuff">
                <img className="prodimg" src={product.image} alt={product.name} />
                <button className="back" onClick={()=> handleBackClick}>
                <img src={backbtn} />
            </button>
                <div className="stuff2">    
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                    <button className="addToCart" onClick={()=>addToCart(product)}>
                        <img src= {cartbut}/>
                    </button>
                </div>
            </div>
        </div> 
        <div className="topBanner">
            <img src="https://images.rpgsite.net/image/da49c9a1/171733/original/genshin-impact_20260618_12.jpg" />
        </div>
    </div>
    );
}

export default ProductDetailPage;