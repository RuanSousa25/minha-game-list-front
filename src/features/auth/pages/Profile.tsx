import UserAvaliacoesList from "../../avaliacoes/components/UserAvaliacoesList";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const authState = useAuth();

  console.log(authState);
  return (
    <div>
      <h2>{authState.state.user?.name}</h2>
      <p>acesso: {authState.state.user?.role}</p>
      <UserAvaliacoesList userId={Number(authState.state.user?.id)} />
    </div>
  );
}
