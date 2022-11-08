import Carousel from "./Carousel";
import React from 'react';
import styles from './Events.module.css'

const Events = () => {
  return (
    <div className={styles.team_container}>
      <h1><span className ={styles.yellow}>E</span>vents</h1>
      <span>LEARN with us.</span>
      <p>Quanta conducts various events throughout the year, here is glimpse of some events conducted by <span className= {styles.yellow}>QUANTA</span></p>
      <Carousel />
    </div>
  )
}

export default Events

