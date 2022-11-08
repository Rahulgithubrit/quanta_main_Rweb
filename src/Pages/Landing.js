import React from 'react'
import Events from '../Components/Events';
import Team from '../Components/Team';
import About from '../Components/About';
import Header from '../Components/Header';
import classes from '../Components/Landing.module.css'
import Footer from '../Components/resources/Footer';
import Contact from '../Components/resources/Contact';
import History from '../Components/History';
import Department from '../Components/Department';
const Landing = () => {
  return (
    <div className={classes.container}>
      <Header/>
      <About/>
      <Team />
      <Events />
      <Department />
      {/* <History /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
