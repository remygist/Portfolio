import styles from "../styles/Work.module.css";
import templateImage from "/images/template.png";

function Work() {
    return (
        <>
            <div className={styles.workWrapper}>
                <div className={styles.imageContainer}>
                    <img src={templateImage}></img>
                    <h3 className={styles.imageText}>EXPO24</h3>
                </div>
                <div className={styles.workDescription}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate molestiae quod optio temporibus harum culpa,
                        impedit similique perspiciatis? Dignissimos quis, illum
                        beatae in earum ipsum quod eligendi labore aliquam rem.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Work;
