import styles from "../styles/Home.module.css";

function Home() {
    return (
        <>
            <div className={styles.homeWrapper}>
                <div className={styles.homeContainer}>
                    <div className={styles.introBlock}>
                        <h2>
                            <span className="blueBox">BACKEND</span>
                            <br></br>
                            DEVELOPER<br></br>
                            BASED IN BRUSSELS,<br></br>
                            BELGIUM
                        </h2>
                        <div className={styles.introText}>
                            <p>
                                "Hi, I'm Rémy Gistelinck, a passionate backend
                                developer who thrives on solving complex
                                problems. Currently, I'm studying Multimedia and
                                Creative Technologies at Erasmushogeschool
                                Brussel, where I'm building a strong foundation
                                in both software development and creative
                                technology."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
