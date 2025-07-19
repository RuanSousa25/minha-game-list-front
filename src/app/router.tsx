import { Route, Routes } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext";
import Login from "../features/auth/pages/Login";

export default function AppRouter() {
  const { state } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
