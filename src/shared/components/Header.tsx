import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Minha Game List</h2>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.navlink}>
          Home
        </NavLink>
        <NavLink to="/login" className={styles.navlink}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}
