import styles from "./Teamcard.module.css"

export default function Teamcard({ props }) {
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={props.img}></img>
      <div className={styles.cardBodyContainer}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardDesc}>{props.description}</p>
      </div>
    </div>
  );
}
