import React, { useState } from "react";
import "../styles/burger-menu.scss";

const BurgerMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <nav className="burger-menu-container">
            <div className={`burger-menu ${isOpen ? 'expanded' : 'collapsed'}`}>
                <div className="vertical-list">
                    {props.sections.map(link => {
                        return <span><a href={link.url}>{link.text}</a></span>
                    })}
                </div>
            </div>
            <div className={`burger-icon ${isOpen ? 'cross' : 'flat'}`} onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default BurgerMenu
