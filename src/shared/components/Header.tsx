import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { useAuth } from "../../features/auth/context/AuthContext";
import { useEffect } from "react";

export default function Header() {
  const { dispatch, state } = useAuth();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <header className={styles.header}>
      <h2>Minha Game List</h2>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.navlink}>
          Home
        </NavLink>
        {(state.user?.role == "admin" || state.user?.role == "moderador") && (
          <NavLink to="/" className={styles.navlink}>
            Sugestôes
          </NavLink>
        )}
        {!state.isAuthenticated ? (
          <NavLink to="/login" className={styles.navlink}>
            Login
          </NavLink>
        ) : (
          <NavLink to={"/"} onClick={logout} className={styles.navlink}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}
