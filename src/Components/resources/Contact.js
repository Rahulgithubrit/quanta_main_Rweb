import React from "react";
import styles from "../resources/Contact.module.css";
// import {copyright.svg} from "../../../public/assets/copyright.svg";
const Contact = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className="contact_h1">Want to know more about us and our work?</h1>
      <button>Contact us</button>
    {/* <div className={styles.footer}>
        <div>
            <span><img src="/assets/copyright.svg"  alt="copyright"/>2022 Jss Quanta Society, Noida</span>
        </div>
    </div> */}
    </div>
    </>
  );
};

export default Contact;
