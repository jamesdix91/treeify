import React, { useState } from 'react';
import BurgerMenu from "./burger-menu.js";
import Toggle from "../components/toggle.js";
import '../styles/layout.scss';
import instagram from '../logos/instagram.svg';
import linkedin from '../logos/linkedin.svg';
import facebook from '../logos/facebook.svg';
import pinterest from '../logos/pinterest.svg';

// data
const links = [
  {
    text: "How it Works",
    url: "/how-it-works"
  },
  {
    text: "Plant a Tree",
    url: "/trees/"
  },
  {
    text: "Blog",
    url: "/blog"
  },
  {
    text: "Contact",
    url: "/contact"
  }
]

const social = [instagram, linkedin, facebook, pinterest]

const Layout = (props) => {

  const [dark, setDark] = useState(false)

  return (
    <>
      <nav className={`desktop-only full-width flex-hv-center ${props.option ? props.option : ''}`}>
        <span className="logo"><a href="/">Treeify</a></span>
        <div className="links flex-left flex-hv-center">
          {links.map((link) => {
            return (
              <span key={link.text}>
                <a href={link.url}>{link.text}</a>
              </span>
            );
          })}
        </div>
        <div className="social flex-right flex-h-center">
          {social.map((social) => (
            <div key={social} className="flex-hv-center">
              <img src={social} />
            </div>
          ))}
        </div>
      </nav>
      <nav className={`mobile-only ${props.option ? props.option : ''}`}>
        <div className="toggle-container">
          <Toggle onToggle={() => setDark(!dark)} />
          <span>Dark Mode</span>
        </div>
        <BurgerMenu sections={links} />
      </nav>
      <main className={props.option}>{props.children}</main>
    </>
  );
};

export default Layout;
