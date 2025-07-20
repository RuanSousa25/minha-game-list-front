import { useState } from "react";
import styles from "../styles/Login.module.css";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  //const navigate = useNavigate();
  const { dispatch } = useAuth();

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login(usuario, senha);
      const token = res.accessToken;
      console.log(token);
      dispatch({ type: "LOGIN", token });
    } catch (err) {
      setErro((err as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandleSubmit}>
        <h2>Entrar</h2>
        {erro && <p className={styles.error}>{erro}</p>}
        <input
          type="text"
          placeholder="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
