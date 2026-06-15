import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { CACHE_KEYS } from "../utils/constants.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage(CACHE_KEYS.AUTH, null);

  const login = (email, password) => {
    if (email && password.length >= 4) {
      const userData = { email, name: email.split("@")[0], loggedInAt: Date.now() };
      setUser(userData);
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
