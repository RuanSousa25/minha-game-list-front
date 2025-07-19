import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
};
type AuthAction = { type: "LOGIN"; token: string } | { type: "LOGOUT" };

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.token);
      return { isAuthenticated: true, token: action.token };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { isAuthenticated: false, token: null };
    default:
      return state;
  }
}
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
