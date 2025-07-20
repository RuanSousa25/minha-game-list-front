import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../features/auth/context/AuthContext";
import AppRouter from "./router";
import Header from "../shared/components/Header";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
