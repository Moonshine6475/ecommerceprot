import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sideBar.css';

function SideBar({filters = {}}) {
    const [sliderValue, setSliderValue] = useState(50);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCharTags, setSelectedCharTags] = useState([]);
    const navigate = useNavigate();
    const characters=[
        {id: 'zhongli', label: 'Zhongli', value: 'Zhongli'},
        {id: 'childe', label: 'Childe', value: 'Childe'},
        {id: 'yelan', label: 'Yelan', value: 'Yelan'},
        {id: 'mona', label: 'Mona', value: 'Mona'},
        {id: 'skirk', label: 'Skirk', value: 'Skirk'},
        {id: 'xiao', label: 'Xiao', value: 'Xiao'},
        {id: 'flins', label: 'Flins', value: 'Flins'},
        {id: 'furina', label: 'Furina', value: 'Furina'},
        {id: 'raiden', label: 'Raiden Shogun', value: 'Raiden Shogun'},
    ]
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const handleCheckboxChange = (value) => {
        setSelectedTags(prev => 
            prev.includes(value)
                ? prev.filter(tag => tag !== value)
                : [...prev, value]
        );
    };
    const handleCheckboxChangeChar = (value)=> {
        setSelectedCharTags(prev => 
            prev.includes(value)
                ? prev.filter(character => character !== value)
                : [...prev, value]
        );
    };

    const handleSearchClick = () => {
        navigate('/product', { state: { filters: { tags: selectedTags, characters: selectedCharTags }} });
    };
    return (
        <div className="sidebar">
            <div className="filterList">
                <h3>Filter by Item</h3>
                <ul className="filterList-ul">
                    <li className="itemlist">
                        <input 
                            type="checkbox" 
                            id="keychains" 
                            name="keychains" 
                            value="Keychain"
                            checked={selectedTags.includes('Keychain')}
                            onChange={(e) => handleCheckboxChange(e.target.value)}
                        />
                        <label htmlFor="keychains">Keychains</label>
                    </li>
                    <li className="itemlist">
                        <input 
                            type="checkbox" 
                            id="standees" 
                            name="standees" 
                            value="Standee"
                            checked={selectedTags.includes('Standee')}
                            onChange={(e) => handleCheckboxChange(e.target.value)}
                        />
                        <label htmlFor="standees">Standees</label>
                    </li>
                    <li className="itemlist">
                        <input 
                            type="checkbox" 
                            id="plushies" 
                            name="plushies" 
                            value="Plushie"
                            checked={selectedTags.includes('Plushie')}
                            onChange={(e) => handleCheckboxChange(e.target.value)}
                        />
                        <label htmlFor="plushies">Plushies</label>
                    </li>

                </ul>
                <h3>Filter by Character</h3>
                <ul className="filterList-ul">
                    {characters.map((item) => (
                        <li className="itemlist" key={item.id}>
                        <input 
                            type="checkbox" 
                            id={item.id} 
                            name={item.id} 
                            value={item.value}
                            checked={selectedCharTags.includes(item.value)}
                            onChange={(e) => handleCheckboxChangeChar(e.target.value)}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                        </li>
                    ))}
                </ul>
                <div className="buttons">
                    <button className="clear-button" onClick={() => {
                        setSliderValue(50);
                        setSelectedTags([]);
                        setSelectedCharTags([]);
                    }}>Clear Filters</button>
                    <button className="searchFilters" onClick={handleSearchClick}>Search</button>   
                </div>
            </div>
    </div>
    );
}
export default SideBar;