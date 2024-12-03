import styles from "../styles/Work.module.css";
import templateImage from "/images/template.png";

function Work({ project }) {
    return (
        <>
            <div className={styles.workWrapper}>
                <a href={project.link} target="blank">
                    <div className={styles.imageContainer}>
                        <img src={project.image} alt={project.name} />
                        <h3 className={styles.imageText}>{project.name}</h3>
                    </div>
                    <div className={styles.workDescription}>
                        <p>{project.description}</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Work;
