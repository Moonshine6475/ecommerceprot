import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/components/accordion/accordion.js';
import Navigation from './components/navigation.jsx'
import Accordion from './components/accordion.jsx'
import PromoBanner from './components/promobanner.jsx'
import ItemCard from './components/itemcard.jsx';
import ProductPage from './pages/productPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import CheckoutPage from './pages/checkout.jsx'
import Survey from './pages/survey.jsx';

function ProductPageWrapper() {
  const location = useLocation();
  const filters = location.state?.filters || {};
  return <ProductPage filters={filters} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/product" element={<ProductPageWrapper />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  )
}

function HomePage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/product');
  };

  return (
    <>
      <Navigation />
      <section id="hero-1619">
        <PromoBanner />
        <div className="cs-container">

            <div className="cs-content">
                <span className="cs-topper">
                    <svg className="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                        <path d="M0.621948 7.49889L6.40262 15L10.343 15L4.56231 7.49889L10.343 -4.2492e-07L6.40262 -2.52681e-07L0.621948 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M7.62195 7.49889L13.4026 15L17.343 15L11.5623 7.49889L17.343 -4.2492e-07L13.4026 -2.52681e-07L7.62195 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M14.7789 7.49889L20.5596 15L24.5 15L18.7193 7.49889L24.5 -4.2492e-07L20.5596 -2.52681e-07L14.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M22.7789 7.49889L28.5596 15L32.5 15L26.7193 7.49889L32.5 -4.2492e-07L28.5596 -2.52681e-07L22.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M30.7789 7.49889L36.5596 15L40.5 15L34.7193 7.49889L40.5 -4.2492e-07L36.5596 -2.52681e-07L30.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M38.7789 7.49889L44.5596 15L48.5 15L42.7193 7.49889L48.5 -4.2492e-07L44.5596 -2.52681e-07L38.7789 7.49889Z" fill="var(--chevronColor)"/>
                        </g>
                    </svg>
                    Your favorite merch store!
                    <svg className="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                        <path d="M48.3781 7.49889L42.5974 15L38.657 15L44.4377 7.49889L38.657 -4.2492e-07L42.5974 -2.52681e-07L48.3781 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M41.3781 7.49889L35.5974 15L31.657 15L37.4377 7.49889L31.657 -4.2492e-07L35.5974 -2.52681e-07L41.3781 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M34.2211 7.49889L28.4404 15L24.5 15L30.2807 7.49889L24.5 -4.2492e-07L28.4404 -2.52681e-07L34.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M26.2211 7.49889L20.4404 15L16.5 15L22.2807 7.49889L16.5 -4.2492e-07L20.4404 -2.52681e-07L26.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M18.2211 7.49889L12.4404 15L8.50004 15L14.2807 7.49889L8.50004 -4.2492e-07L12.4404 -2.52681e-07L18.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M10.2211 7.49889L4.4404 15L0.500041 15L6.28071 7.49889L0.500042 -4.2492e-07L4.4404 -2.52681e-07L10.2211 7.49889Z" fill="var(--chevronColor)"/>
                        </g>
                    </svg>
                </span>
                <h1 className="cs-title">For the love of Genshin Impact</h1>
                <button className="shopNow-btn" onClick={handleShopNow}>Shop Now</button>
            </div>
            
        </div>
        <Accordion />
        <picture className="cs-background">
            <source media="(max-width: 600px)" srcSet="https://images.wallpapersden.com/image/download/genshin-impact-2019_a2prbGyUmZqaraWkpJRmbmdlrWZlbWU.jpg"/>
            <source media="(min-width: 601px)" srcSet="https://images.wallpapersden.com/image/download/genshin-impact-2019_a2prbGyUmZqaraWkpJRmbmdlrWZlbWU.jpg"/>
            <img decoding="async" src="https://images.wallpapersden.com/image/download/genshin-impact-2019_a2prbGyUmZqaraWkpJRmbmdlrWZlbWU.jpg" alt="meeting" width="2250" height="1500" aria-hidden="true"/>
        </picture>
        <footer className="cs-footer">
        <p> Disclaimer: This Website is a mockup for graphic design, and is not a real merch store.</p>
        </footer>

    </section>
  </>
  )
}

export default App
