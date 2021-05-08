import React, { useState } from 'react';
import Earth from '../components/earth.js';
import Layout from '../components/layout.js';
import * as styles from '../styles/index.module.scss';

// markup
const IndexPage = () => {

  const [dark, setDark] = useState(false)

  return (
    <Layout option="index">
      <title>Home</title>
      <main className={`${styles.page} ${dark ? 'dark' : ''}`} onClick={() => setDark(!dark)}>
        <section className="full-width">
          <div className={`half-width-1 flex-v-center ${styles.header}`}>
            <h1>Help the Earth <span>recover.</span></h1>
            <p>Planting a tree is the easiest way to give back to the Earth</p>
            <button><a href="/trees">Plant a Tree</a></button>
          </div>
          <Earth />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
