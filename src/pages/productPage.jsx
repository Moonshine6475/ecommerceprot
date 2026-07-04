import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation.jsx';
import products from '../assets/data/products.json';
import SideBar from '../components/sideBar.jsx';
import ItemCard from '../components/itemcard.jsx';
import forbtn from "../assets/frontbutton.png";
import './productPage.css';

function ProductPage({filters = {}, cart = {}}) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15; // 4x4 grid

    const allProducts = products;
    useEffect(() => {
        setCurrentPage(0);
    }, [filters]);

    const filteredProducts = Object.keys(filters).length === 0 || ((filters.tags && filters.tags.length === 0) && (filters.characters && filters.characters.length === 0))
        ? allProducts
        : products.filter(product => {
        const hasSelectedTags = filters.tags && filters.tags.length > 0;
        const hasSelectedChars = filters.characters && filters.characters.length > 0;

        if (!hasSelectedTags && !hasSelectedChars) return true;

        const matchesTags = hasSelectedTags 
            ? filters.tags.some(tag => product.tags?.includes(tag)) 
            : false;

        const matchesChars = hasSelectedChars 
            ? filters.characters.some(char => product.tags?.includes(char)) 
            : false;
        if (hasSelectedTags && hasSelectedChars) {

            return matchesTags && matchesChars;
        }
        
        return matchesTags || matchesChars;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <>
        <div className="mainstuff">
            <Navigation cart = {cart}/>
            <div className="product-header">
                <h1>Product Page</h1>
            </div>
            <div className="product-container">
                <SideBar filters={filters} />
                <div className="product-content">
                    {filteredProducts.length === 0 ? (
                        <p>No products found</p>
                    ) : (
                        <>
                            <div className="product-grid">
                                {currentItems.map((product, index) => (
                                    <ItemCard key={product.id || index} product={product} />
                                ))}
                            </div>
                            <div className="pagination-buttons">
                                <button style={{ backgroundImage: `url(${forbtn})`, transform: 'rotate(180deg)'}} onClick={handlePrevPage} disabled={currentPage === 0}></button>
                                <span>{currentPage + 1} / {totalPages}</span>
                                <button style={{ backgroundImage: `url(${forbtn})` }} onClick={handleNextPage} disabled={currentPage === totalPages - 1}></button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="topBanner">
                <img src="https://images.rpgsite.net/image/da49c9a1/171733/original/genshin-impact_20260618_12.jpg" />
            </div>
            <div className="bottomBanner">
                <img src="https://images8.alphacoders.com/112/thumb-1920-1129503.jpg" />
            </div>
        </div>
        </>
    );
}
export default ProductPage;