import styles from "../styles/Home.module.css";

function Home() {
	return (
		<>
			<div className={styles.homeWrapper}>
				<div className={styles.homeContainer}>
					<div className={styles.introBlock}>
						<h2>
							<span className="blueBox">BACKEND</span><br></br>
							DEVELOPER<br></br>
							BASED IN BRUSSELS,<br></br>
							BELGIUM
						</h2>
						<div className={styles.introText}>
						<p>
							Lorem ipsum dolor sit amet consectetur. Semper fermentum odio
							vestibulum mi tellus morbi leo. Molestie fermentum nec sit
							vestibulum at sit in velit facilisis. Etiam tristique tellus metus
							nunc mattis eros. Lectus orci ipsum.
						</p>
					</div>
					</div>
					
				</div>
			</div>
		</>
	);
}

export default Home;
