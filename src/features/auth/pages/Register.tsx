import { useState } from "react";
import styles from "../styles/Login.module.css";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register(usuario, senha);
      console.log(res);
      navigate("/login");
    } catch (err) {
      setErro((err as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandleSubmit}>
        <h2>Registrar</h2>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
