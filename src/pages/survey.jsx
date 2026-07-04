
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation.jsx';
import products from '../assets/data/products.json';
import './survey.css';
import subbut from '../assets/subbut.png'
import home from '../assets/home.png'


function Survey(){
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/home');
    };

    const handleHome= () =>{
        navigate('/home');
    }
    return(
        <>
            <Navigation />
            <div className="endContainer">
                <h1>Thank you for shopping at Teyvat Emporium!</h1>

                <div className="form1">
                    <form onSubmit={handleSubmit}>
                        <div className="survey">
                            <label htmlFor="firstName" className="form-label">Leave us a review below!</label>
                            <textarea id="message" className="input" />
                        </div>
                        <div className="button-wrapper">
                            <button className="subbtn" type="submit">
                                <img src={subbut} />
                            </button>
                            <button className="home" onClick={handleHome}>
                                <img src={home} />
                            </button>
                        </div>
                    </form>
                </div>
                  <div className="bottomBanner">
                    <img src="https://i.redd.it/all-the-wallpapers-from-nod-krai-concept-overview-web-event-v0-vpbxbb3k2kef1.jpg?width=3840&format=pjpg&auto=webp&s=9e2bbf262551565c0fa1d5c8fc49655d264020a1" />
                </div>
            </div>
            <div className="topBanner">
                <img src="https://i.redd.it/2k-genshin-wallpaper-of-fontain-region-v0-atiig9w9whff1.jpg?width=2560&format=pjpg&auto=webp&s=b64f79701a1a0997b0d33469dedc1f577eaac369" />
            </div>
          
        </>
    );
}
export default Survey;

