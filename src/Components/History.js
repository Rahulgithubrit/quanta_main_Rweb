import React from 'react'
import styles from './History.module.css';
const History = () => {
  return (
    <div className={styles.main}>
      <div className ={styles.history}>History of</div>
      <div className= {styles.quanta}>Quanta</div>
      <span className={styles.lines}></span>
    </div>
  )
}

export default History
