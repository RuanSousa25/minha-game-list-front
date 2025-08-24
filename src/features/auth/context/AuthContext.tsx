import { jwtDecode } from "jwt-decode";
import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { DotNetToken } from "../types";

type User = {
  id: string;
  name: string;
  role: string;
};

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
};
type AuthAction = { type: "LOGIN"; token: string } | { type: "LOGOUT" };

function decodeUser(jwtToken: string): User | null {
  try {
    const decoded = jwtDecode<DotNetToken>(jwtToken);
    return {
      id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      name: decoded[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ],
      role: decoded[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ],
    };
  } catch {
    return null;
  }
}

const initialToken = localStorage.getItem("token");
const initialState: AuthState = {
  isAuthenticated: !!initialToken,
  token: initialToken,
  user: initialToken ? decodeUser(initialToken) : null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.token);
      return {
        isAuthenticated: true,
        token: action.token,
        user: jwtDecode(action.token),
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { isAuthenticated: false, token: null, user: null };
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
