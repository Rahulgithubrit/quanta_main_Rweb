import React from 'react'
import HeaderRE from '../Components/resources/HeaderRE';
import Carousel from '../Components/Carousel';
import styles from '../Components/resources/Resources.module.css';
import Contact from '../Components/resources/Contact';
import Footer from '../Components/resources/Footer';
const Resources = () => {
  return (
   <div className={styles.container}>
    <HeaderRE />
    <div className={styles.team_container}>
    <h1><span className={styles.yellow}>R</span>esources</h1>
    <span>LEARN with us.</span>
      <p>Learn <span>PYTHON</span> using the following link</p>
    <Carousel />
    <Contact />
    <Footer />
  </div>
  
    </div>
  )
}

export default Resources
