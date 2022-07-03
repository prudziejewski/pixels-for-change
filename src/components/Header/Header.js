import React from 'react';
import "./Header.scss"
import { Link } from "react-router-dom";

import LogoAlt from "../../Assets/Icons/PixelsLogo.png"

function Header() {
  return (
    
    <header className="header">
            <div className="header__inline">
                <div className="header__logo">
                    <Link to={"/"}>
                        <img className="header__logo" src={LogoAlt} alt="Pixels for change logo" />
                        </Link>
                </div>
                <nav className="header__links">
                    <Link to={"/add"}>
                        <button className="header__add">
                            <h3>Register</h3>
                        </button>
                    </Link>
                    <Link to={"/BuyPixel"} > 
                        <button className="header__buy">
                            <h3>Buy Pixel</h3>
                        </button>
                    </Link>
                </nav>
             </div>
    </header>
        
  )
}

export default Header;