import { useState, useEffect, useCallback } from "react";
import Card from "./Card";

import styles from "./Carousel.module.css";
import { React } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const sliderItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];
const totalSlides = sliderItems.length;
const initialSlideIndex = Math.floor(totalSlides / 2);

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex);

  const handleClick = useCallback(
    (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlides - 1);
      } else {
        setSlideIndex(slideIndex < totalSlides - 1 ? slideIndex + 1 : 0);
      }
    },
    [slideIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => handleClick("right"), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [handleClick]);

  return (
    <div className={styles.main}>
      <div className={styles.text}>

      </div>
      <div
        className={styles.carousel_container}
        style={{
          transform: `translateX(${(initialSlideIndex - slideIndex) * 235}px)`,
        }}
      >
        {sliderItems.map((item) => {
          let focused = item.id === slideIndex + 1;
          return (
            <div
              key={item.id}
              className={focused ? styles.main_card : styles.card}
            >
              <Card isFocused={focused} />
            </div>
          );
        })}
      </div>
      <div className={styles.slider_btns}>
        <button onClick={() => handleClick("left")}>
          <img src="/assets/arrow.svg" alt="left" />
        </button>
        <button onClick={() => handleClick("right")}>
          <img src="/assets/arrow.svg" alt="right" />
        </button>
      </div>
    </div>
  );
};
// const Carousel = () => {
//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide"
//       data-ride="carousel"
//     >
//       <ol className="carousel-indicators">
//         <li
//           data-target="#carouselExampleIndicators"
//           data-slide-to="0"
//           className="active"
//         ></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//       </ol>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img className="d-block w-100" src="../images/Logo.png" alt="First slide" />
//         </div>
//         <div className="carousel-item">
//           <img className="d-block w-100" src="../images/profile.jpeg" alt="Second slide" />
//         </div>
//         <div className="carousel-item">
//           <img className="d-block w-100" src="../images/profile1.png" alt="Third slide" />
//         </div>
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#carouselExampleIndicators"
//         role="button"
//         data-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#carouselExampleIndicators"
//         role="button"
//         data-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   }
export default Carousel;
