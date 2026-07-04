import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import logo from '../assets/logo.png';


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('shopping_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
useEffect(() => {
  const handleCartUpdate = () => {
    const savedCart = localStorage.getItem('shopping_cart');
    setCart(savedCart ? JSON.parse(savedCart) : []);
  };


  window.addEventListener('storage', handleCartUpdate);
  

  window.addEventListener('cartUpdated', handleCartUpdate);

  return () => {
    window.removeEventListener('storage', handleCartUpdate);
    window.removeEventListener('cartUpdated', handleCartUpdate);
  };
}, []);
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleProductClick = (tag) => {
    navigate('/product', { state: { filters: { tags: [tag] } } });
  };

  const handleHomeClick = () => {
    navigate('/home');
  }

  const HandleCheckoutClick = () =>{
    navigate('/checkout');
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="cs-navigation" className={isMenuOpen ? 'cs-active' : ''}>
      <div className="cs-container">
        <a onClick={() => handleHomeClick} className="cs-logo" aria-label="Return to Home page">
          <img 
            src={logo} 
            alt="Company Logo" 
            aria-hidden="true" 
            loading="lazy"
          />
        </a>
        <nav className="cs-nav" aria-label="main navigation">
          <button className="cs-toggle" aria-label="mobile menu toggle" aria-expanded={isMenuOpen} aria-controls="cs-ul-wrapper" aria-haspopup="menu" onClick={toggleMenu}>
            <span className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1"></span>
              <span className="cs-line cs-line2"></span>
              <span className="cs-line cs-line3"></span>
            </span>
          </button>
          <div className="cs-ul-wrapper" id="cs-ul-wrapper">
            <ul className="cs-ul">
              <li className="cs-li">
                <a onClick={handleHomeClick} className="cs-li-link cs-active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="cs-li">
                <a onClick={handleHomeClick} className="cs-li-link">
                  About
                </a>
              </li>
              <li className={`cs-li cs-dropdown ${isProductsDropdownOpen ? 'cs-active' : ''}`}>
                <button className="cs-li-link cs-dropdown-toggle" aria-haspopup="menu" aria-expanded={isProductsDropdownOpen} id="services-dropdown-toggle" onClick={toggleProductsDropdown}>
                  Products
                  <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="" width="15" height="15" loading="lazy" aria-hidden="true"/>
                </button>
                <ul className="cs-drop-ul" aria-labelledby="services-dropdown-toggle">
                  <li className="cs-drop-li">
                    <a onClick={() => handleProductClick('Keychain')} className="cs-li-link cs-drop-link">Keychains</a>
                  </li>
                  <li className="cs-drop-li">
                    <a onClick={() => handleProductClick('Standee')} className="cs-li-link cs-drop-link">Standees</a>
                  </li>
                  <li className="cs-drop-li">
                    <a onClick={() => handleProductClick('Plushie')} className="cs-li-link cs-drop-link">Plushies</a>
                  </li>
                </ul>
              </li>
              <li className="cs-li">
                <a onClick={()=> HandleCheckoutClick()} className="cs-li-link">
                  Checkout ({cart.length})
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="cs-contact-group">
          <a className="cs-phone">
            <img className="cs-phone-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg" alt="" width="24" height="24" aria-hidden="true" loading="lazy"/>
            +1 234 567 890
          </a>
          <div className="cs-social">
            <a href="" className="cs-social-link" aria-label="Visit our Facebook page">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-1a.svg" alt="" width="12" height="12" aria-hidden="true" loading="lazy"/>
            </a>
            <a href="" className="cs-social-link" aria-label="Visit our Twitter page">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/twitter-1a.svg" alt="" width="12" height="12" aria-hidden="true" loading="lazy"/>
            </a>
            <a href="" className="cs-social-link" aria-label="Visit our Instagram page">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram1a.svg" alt="" width="12" height="12" aria-hidden="true" loading="lazy"/>
            </a>
            <a href="" className="cs-social-link" aria-label="Visit our YouTube channel">
              <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/youtube1a.svg" alt="" width="12" height="12" aria-hidden="true" loading="lazy"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navigation;