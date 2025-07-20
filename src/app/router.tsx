import { Route, Routes } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext";
import Login from "../features/auth/pages/Login";
import Jogos from "../features/jogos/pages/Jogos";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Jogos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
