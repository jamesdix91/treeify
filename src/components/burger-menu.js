import React, { useState, useEffect } from "react";
import "../styles/burger-menu.scss";

const BurgerMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [interacted, setInteracted] = useState(false);

    const handleClick = () => {
        if (!interacted) setInteracted(prev => !prev)
        setIsOpen(prev => !prev)
    }

    return (
        <nav className="burger-menu-container">
            <div className={`burger-menu ${interacted ? (isOpen ? 'expanded' : 'collapsed') : ''}`}>
                <div className="vertical-list links">
                    {props.sections.map(link => {
                        return <span key={link.text}><a href={link.url}>{link.text}</a></span>
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
