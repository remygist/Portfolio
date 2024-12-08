import { Link } from 'react-scroll';
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.nameTitle}>
          <h1>Rémy Gistelinck</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
