import React from 'react'
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.first}>
        <span><img src="/assets/insta.svg"/></span>
        <span>2022 Jss Quanta Society, Noida</span>
        </div> 
        <div className={styles.second}>
        Jss Academy of Technical Education, Sector-62, Noida, U.P. , India - 201301
        </div>
        <div className={styles.third}>
            <span><a><img src="/assets/insta.svg" alt="insta"/></a></span>
            <span><a><img src="/assets/insta.svg" alt="insta"/></a></span>
            <span><a><img src="/assets/linkedin.svg" alt="linkedin"/></a></span>
        </div>
    </div>
  )
}

export default Footer
