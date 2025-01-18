import React from "react";
import "./styles.css";

function Header() {
    return (
        <header>
            <nav className="nav">
                
                <div className="nav-logo">
                    <img
                        src="/images/brammi.jpeg"
                        alt="logo"
                        className="logo"
                    />
                    <span className="nav-title-left">Meme Generator</span>
                </div>

                
                <div></div>

                
                <div className="nav-title-right">React Project</div>
            </nav>
        </header>
    );
}

export default Header;
