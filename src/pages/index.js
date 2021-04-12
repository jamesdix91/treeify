import React, { useState } from 'react';
import Earth from '../components/earth.js';
import BurgerMenu from '../components/burger-menu.js';
import Toggle from "../components/toggle.js";
import '../styles/index.scss';
import instagram from '../logos/instagram.png';
import linkedin from '../logos/linkedin.png';
import facebook from '../logos/facebook.png';
import pinterest from '../logos/pinterest.png';

// data
const links = [
  {
    text: "How it Works",
    url: "/how-it-works"
  },
  {
    text: "Plant a Tree",
    url: "/products/"
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

// markup
const IndexPage = () => {

  const [dark, setDark] = useState(false)

  return (
    <main className={`page ${dark ? 'dark' : ''}`} onClick={() => setDark(!dark)}>
      <div className="overlay"></div>
      <nav className="desktop-only full-width flex-hv-center">
        <span className="logo">Treeify</span>
        <div className="links flex-left flex-hv-center">
          {links.map(link => {
            return <span><a href={link.url}>{link.text}</a></span>
          })}
        </div>
        <div className="social flex-right flex-h-center">
          {social.map(social => <div className="flex-hv-center"><img src={social} /></div>)}
        </div>
      </nav>
      <nav className="mobile-only">
        <div className="toggle-container">
          <Toggle onToggle={() => setDark(!dark)} />
          <span>Dark Mode</span>
        </div>
        <BurgerMenu sections={links} />
      </nav>

      <title>Home</title>
      <section className="full-width">
        <div className="half-width-1 flex-v-center header">
          <h1>Help the Earth <span>recover.</span></h1>
          <p>Planting a tree is the easiest way to give back to the Earth</p>
        </div>
        <Earth />
      </section>
    </main>
  )
}

export default IndexPage
