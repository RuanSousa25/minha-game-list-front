import { useState } from "react";
import styles from "../styles/Login.module.css";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import ErrorToast from "../../../shared/components/ErrorToast";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register(usuario, senha);
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandleSubmit}>
        <h2>Registrar</h2>
        {error && <ErrorToast message={error} onClose={() => setError(null)} />}
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
