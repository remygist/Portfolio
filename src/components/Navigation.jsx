import styles from "../styles/Navigation.module.css";

function Navigation() {
	return (
		<>
			<nav className={styles.navWrapper}>
				<div className={styles.navContainer}>
					<div className={styles.nameTitle}>
						<h1>Rémy Gistelinck</h1>
					</div>
					<ul className={styles.navLinks}>
						<li>Projects</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
