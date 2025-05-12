
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem("footystats_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // For demo purposes, we're just setting a mock user
    // In a real app, you would validate with a backend
    const mockUser = {
      id: "user-" + Math.random().toString(36).substr(2, 9),
      name: email.split("@")[0],
      email: email,
    };
    
    setUser(mockUser);
    localStorage.setItem("footystats_user", JSON.stringify(mockUser));
    return Promise.resolve();
  };

  const signUp = async (name: string, email: string, password: string) => {
    // For demo purposes, we're just setting a mock user
    // In a real app, you would register with a backend
    const mockUser = {
      id: "user-" + Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
    };
    
    setUser(mockUser);
    localStorage.setItem("footystats_user", JSON.stringify(mockUser));
    return Promise.resolve();
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("footystats_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
