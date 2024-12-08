import projects from "../../src/assets/projects.json";
import Work from "../components/Work.jsx";
import styles from "../styles/Projects.module.css";

function Projects() {
    return (
        <div className={styles.projectsWrapper}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitle}>
                    <h2>MY <span className="blueBox">PROJECTS</span></h2>
                </div>
                <div className={styles.flexDisplay}>
                    {/* <div className={styles.filterBox}>
                        <p>LANGUAGE</p>
                        <div className={styles["project-checkbox-container-1"]}>
                            <div className={styles["project-checkbox"]}>
                                <input type="checkbox" name="javascript" />
                                <label htmlFor="javascript">Javascript</label>
                            </div>
                            <div className={styles["project-checkbox"]}>
                                <input type="checkbox" name="kotlin" />
                                <label htmlFor="kotlin">Kotlin</label>
                            </div>
                            <div className={styles["project-checkbox"]}>
                                <input type="checkbox" name="php" />
                                <label htmlFor="php">PHP</label>
                            </div>
                            <div className={styles["project-checkbox"]}>
                                <input type="checkbox" name="python" />
                                <label htmlFor="python">Python</label>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.workContainer}>
                        {projects.map((project, index) => (
                            <Work key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
