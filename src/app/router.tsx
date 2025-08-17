import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Jogos from "../features/jogos/pages/Jogos";
import JogoPage from "../features/jogos/pages/Jogo";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Jogos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jogo/:jogoId" element={<JogoPage />} />
    </Routes>
  );
}
