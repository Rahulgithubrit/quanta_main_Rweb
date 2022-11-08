import { teamThirdYear, teamFourthYear } from "../assets/teamInfo";
import Teamyear from "../Components/Teamyear";
import styles from "./Team.module.css";
import Contact from "../Components/resources/Contact";
import Footer from "../Components/resources/Footer";

export default function Teampage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p className="heroText">Meet the Team...</p>
        <img
          src={`${process.env.PUBLIC_URL}/assets/team-hero-img.png`}
          className="heroImg"
        />
      </div>
      <Teamyear props={teamFourthYear} year="Fourth" />
      <Teamyear props={teamThirdYear} year="Third" />
      <Contact />
      <Footer />
    </div>
  );
}
