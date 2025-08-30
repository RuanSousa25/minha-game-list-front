import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { useAuth } from "../../features/auth/context/AuthContext";

export default function Header() {
  const { dispatch, state } = useAuth();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const isAdminOrMod =
    state.user?.role == "admin" || state.user?.role == "moderador";

  return (
    <header className={styles.header}>
      <h2>Minha Game List</h2>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.navlink}>
          Home
        </NavLink>
        {isAdminOrMod && (
          <NavLink to="/" className={styles.navlink}>
            Sugestôes
          </NavLink>
        )}
        {state.isAuthenticated && (
          <NavLink to="/" className={styles.navlink}>
            Perfil
          </NavLink>
        )}
        {!state.isAuthenticated ? (
          <>
            <NavLink to="/login" className={styles.navlink}>
              Login
            </NavLink>
            <NavLink to="/registrar" className={styles.navlink}>
              Registrar
            </NavLink>
          </>
        ) : (
          <NavLink to={"/"} onClick={logout} className={styles.navlink}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}
