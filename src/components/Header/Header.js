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
                     <Link to={"/Login"} > 
                        <button className="header__login">
                            <h3>Login</h3>
                        </button>
                    </Link>
                    <Link to={"/add"}>
                        <button className="header__add">
                            <h3>Register</h3>
                        </button>
                    </Link>
                    <Link to={"/BuyPixel"} > 
                        <button className="header__buy">
                            <h3>Pick a Pixel</h3>
                        </button>
                    </Link>
                    <Link to={"/checkout"} > 
                        <button className="header__checkout">
                            <h3>Checkout</h3>
                        </button>
                    </Link>
                   
                </nav>
             </div>
    </header>
        
  )
}

export default Header;