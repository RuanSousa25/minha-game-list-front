import { useState } from "react";
import styles from "../styles/Login.module.css";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ErrorToast from "../../../shared/components/ErrorToast";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  //const navigate = useNavigate();
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login(usuario, senha);
      const token = res.accessToken;
      console.log(token);
      dispatch({ type: "LOGIN", token });
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandleSubmit}>
        <h2>Entrar</h2>
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
        <button type="submit">Entrar</button>
      </form>
      {error && <ErrorToast message={error} onClose={() => setError(null)} />}
    </div>
  );
}
