import { Link } from "react-scroll";
import styles from "../styles/About.module.css";
import aboutImage from "/images/me.jpg";

function About() {
    return (
        <>
            <div className={styles.aboutWrapper} id="about">
                <h1>
                    WANT TO KNOW <br></br>
                    <span className={styles.offset}>
                        MORE <span className="blueBox">ABOUT ME?</span>
                    </span>
                </h1>
                <div className={styles.aboutMe}>
                    <img className={styles.aboutImage} src={aboutImage}></img>
                    <div className={styles.aboutText}>
                        <p>
                            My journey into the world of programming began
                            during my secondary education in Computer
                            Management, where I developed a strong foundation in
                            software development and discovered my passion for
                            solving technical challenges.
                        </p>
                        <br></br>
                        <p>
                            As I complete my studies in Multimedia & Creative
                            Technologies, I’ve built a diverse skill set that
                            includes video editing, 3D design, and web design.
                            While these experiences have broadened my creative
                            perspective, my true focus lies in backend
                            development, where I thrive on designing efficient,
                            scalable systems and crafting clean, maintainable
                            code.
                        </p>
                    </div>
                </div>

                <div className={styles.bottomText}>
                    <p>Enough about me.</p>
                    <h1>
                        WHAT CAN I DO<br></br>
                        <span className={styles.offset}>
                            <span className="blueBox">FOR YOU?</span>
                        </span>
                    </h1>
                </div>
            </div>
            <div className={styles.contacts} id="contact">
                <a href="https://github.com/remygist" target="blank">GITHUB</a>
                <a href="https://www.linkedin.com/in/r%C3%A9my-gistelinck-47987926a/" target="blank">LINKEDIN</a>

                <p className={styles.email}>rgistelinck@gmail.com</p>
            </div>
            <div className={styles.backToTop}>
                {" "}
                <Link to="home" smooth={true} duration={500}>
                    <span className="blueBox">BACK TO TOP</span>
                </Link>
            </div>
        </>
    );
}

export default About;
