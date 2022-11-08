
import Footer from "../Components/resources/Footer";
import styles from "./Projects.module.css";
import Img from "./Projects Images/sample.png";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <p className={styles.hero}>
          What we have made <span className={styles.heroSpan}>@Quanta</span>...
        </p>
      </div>
      <div className={styles.main}>
        {/* add projects beneath */}
        <div className={styles.projectContainer1}>
          <img
            src={Img}
            className={styles.projectImage}
            alt="<project-name> project demo image"
          />
          <div className={styles.projectDetails}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        <div className={styles.projectContainer2}>
          <img
            src={Img}
            className={styles.projectImage}
            alt="<project-name> project demo image"
          />
          <div className={styles.projectDetails}>
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        <div className={styles.projectContainer1}>
          <img
            src={Img}
            className={styles.projectImage}
            alt="<project-name> project demo image"
          />
          <div className={styles.projectDetails}>
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        <div className={styles.projectContainer2}>
          <img
            src={Img}
            className={styles.projectImage}
            alt="<project-name> project demo image"
          />
          <div className={styles.projectDetails}>
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              explicabo animi voluptas est unde aliquam fugiat consequuntur
              saepe qui, vel, aut nesciunt omnis hic laudantium. Maxime vero
              animi dicta voluptate!
            </p>
          </div>
        </div>
        {/* add projects above */}
      </div>
      <div className={styles.contact}>
        <p>
          Want to connect with us and be part of <span>Quanta</span> family?
        </p>
        <button>Contact us</button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
