import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./accordion.css";

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);
  const navigate = useNavigate();

  const handleProductClick = (tag) => {
    navigate('/product', { state: { filters: { tags: [tag] } } });
  };

  return (
    <div className="cs-accordion" id="cs-accordion">
      {/* Item 1 */}
      <div 
        className="cs-accordion-group"
        onMouseEnter={() => setOpenItem('item-1')}
        onMouseLeave={() => setOpenItem(null)}
        onClick={() => handleProductClick('Keychain')}
      >
        <img src="https://i.etsystatic.com/27276692/r/il/77e6ff/3099483365/il_fullxfull.3099483365_odh2.jpg" alt="Keychains" />
        <button className="cs-accordion-btn">Keychains</button>
        <div className={`cs-accordion-content ${openItem === 'item-1' ? 'is-open' : ''}`}>
          <p>Custom keychain collection details, pricing, and sizes go here.</p>
        </div>
      </div>
        
      {/* Item 2 */}
      <div 
        className="cs-accordion-group"
        onMouseEnter={() => setOpenItem('item-2')}
        onMouseLeave={() => setOpenItem(null)}
        onClick={() => handleProductClick('Standee')}
        style={{ position: 'relative' }}    
      >
        <img src="https://preview.redd.it/my-acrylic-standee-collection-are-you-collecting-them-as-v0-jsr783bot6ac1.jpeg?auto=webp&s=47190586fbd715b26a5a390dbd30e456fcb3442d" alt="Standees" />
        <button className="cs-accordion-btn">Standees</button>
        <div className={`cs-accordion-content ${openItem === 'item-2' ? 'is-open' : ''}`}>
          <p>Acrylic standee options, single or double-sided print specifications.</p>
        </div>
      </div>

      {/* Item 3 */}
      <div 
        className="cs-accordion-group"
        onMouseEnter={() => setOpenItem('item-3')}
        onMouseLeave={() => setOpenItem(null)}
        onClick={() => handleProductClick('Plushie')}
      >
        <img src="https://i.etsystatic.com/61707520/r/il/e62495/7188361385/il_fullxfull.7188361385_q5ij.jpg"/>
        <button className="cs-accordion-btn">Plushies</button>
        <div className={`cs-accordion-content ${openItem === 'item-3' ? 'is-open' : ''}`}>
          <p>Soft plushies, fabric materials, cushions, and custom patterns.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;