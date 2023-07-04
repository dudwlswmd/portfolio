import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [showGlitchImg, setShowGlitchImg] = useState(false);

     const handleMenuClick = () => {
          setIsMenuOpen(!isMenuOpen);
          setShowGlitchImg(!showGlitchImg)
     };

     useEffect(() => {
          if (isMenuOpen) {
               setShowGlitchImg(true);
               const timer = setTimeout(() => {
                    setShowGlitchImg(false);
               }, 800);
               return () => clearTimeout(timer);
          } else {
               const timer = setTimeout(() => {
                    setShowGlitchImg(false);
               }, 500);
               return () => clearTimeout(timer);
          }
     }, [isMenuOpen]);
     

return (
     <header>
          <h1>
          <Link to="/">
               <img src="/img/logo.png" alt="로고" />
          </Link>
          </h1>
          <div className={`menu ${isMenuOpen ? 'on' : ''}`}>
               <span onClick={handleMenuClick}></span>
               <ul className="gnb" data-text="TRHACKER">
                    <li data-text="home"><Link to="/" onClick={handleMenuClick}>home</Link></li>
                    <li data-text="about"><Link to="/About" onClick={handleMenuClick}>about</Link></li>
                    <li data-text="work"><Link to="/Work" onClick={handleMenuClick}>work</Link></li>
                    <li data-text="contact"><Link to="/Contact" onClick={handleMenuClick}>contact</Link></li>
               </ul>
          </div>
          {showGlitchImg && <img className='glitchImg' src="img/glitch.gif" alt="글리치이미지" />}
     </header>
     );
};

export default Header;
