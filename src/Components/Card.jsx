import styles from "./Card.module.css";

const info = [
  {
    id: 1,
    name: "Anuj Gupta",
    designation: "President",
  },
  {
    id: 2,
    name: "Utkarsh Prakash",
    designation: "CTC",
  },
];
const Card = ({ isFocused }) => {
  return (
    <div className={styles.card_container}>
      {isFocused && (
        <>
          <div className={styles.right_cc}>
            <h2>{info.name}</h2>
            <span>{info.designation}</span>
            <div>
              <img src="/assets/insta.svg" />
              <img src="/assets/linkedin.svg" />
            </div>
          </div>
        </>
      )}
      <div
        className={`${styles.card} ${isFocused ? styles.card_bg : ""}`}
      ></div>
    </div>
  );
};

export default Card;
