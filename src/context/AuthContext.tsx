import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
  role: "candidate" | "company";
  avatar: string;
  details?: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (role: "candidate" | "company", name: string, email: string, details?: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("wie_auth_session");
      if (session) {
        try {
          setUser(JSON.parse(session));
        } catch (e) {
          console.error("Failed to parse auth session", e);
        }
      }
      setLoading(false);
    }
  }, []);

  const login = (role: "candidate" | "company", name: string, email: string, details?: any) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
    const newUser: User = {
      name,
      email,
      role,
      avatar: initials || "U",
      details,
    };
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("wie_auth_session", JSON.stringify(newUser));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("wie_auth_session");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
