import React from 'react';
import './promobanner.css';
import promoImg from '../assets/promobanner.png';


function PromoBanner() {
  return (
    <div className="promo-banner">
        <img src={promoImg} alt="Promo Banner" />

        
    </div>
  );
}
export default PromoBanner;