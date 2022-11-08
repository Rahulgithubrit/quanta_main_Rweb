import React from 'react'
import Carousel from './Carousel'
import styles from './Team.module.css';
const Team = () => {
  return (
    <div className={styles.team_container}>
    <h1><span className={styles.yellow}>T</span>eam</h1>
      <p>Quanta conducts various events throughout the year, here is glimpse of some events conducted by <span className= {styles.yellow}>QUANTA</span></p>
    <Carousel />
  </div>
  )
}

export default Team
