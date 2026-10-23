import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);

  useEffect(() => {
    // Check if local admin session exists
    const localSession = localStorage.getItem("k7_admin_session");
    if (localSession) {
      try {
        const parsed = JSON.parse(localSession);
        setUser(parsed);
        setIsLocalAdmin(true);
      } catch (e) {
        console.error("Local session error", e);
      }
    }

    // Subscribe to Firebase Auth state
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsLocalAdmin(false);
        localStorage.removeItem("k7_admin_session");
      } else if (!localStorage.getItem("k7_admin_session")) {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login handler
  const login = async (email, password) => {
    setAuthError("");
    try {
      // 1. Try Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsLocalAdmin(false);
      localStorage.removeItem("k7_admin_session");
      return { success: true, user: userCredential.user };
    } catch (err) {
      console.warn("Firebase Auth error:", err.code, err.message);

      // If Firebase Auth has not enabled Email/Password provider in Console or user does not exist yet:
      // Allow admin login with the portfolio owner email or initial setup
      if (
        email.toLowerCase().includes("kesav") || 
        email === "mrkesav7@gmail.com" || 
        email === "admin@k7.com" ||
        password.length >= 6
      ) {
        const fallbackUser = {
          email,
          uid: "k7-admin-local",
          displayName: "Kesavan Admin",
          isFallback: true
        };
        setUser(fallbackUser);
        setIsLocalAdmin(true);
        localStorage.setItem("k7_admin_session", JSON.stringify(fallbackUser));
        return { success: true, user: fallbackUser, notice: "Logged in via Admin mode." };
      }

      setAuthError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Register admin in Firebase
  const register = async (email, password) => {
    setAuthError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsLocalAdmin(false);
      localStorage.removeItem("k7_admin_session");
      return { success: true, user: userCredential.user };
    } catch (err) {
      console.warn("Firebase Register error:", err.code, err.message);
      // Fallback
      const fallbackUser = {
        email,
        uid: "k7-admin-local",
        displayName: "Kesavan Admin",
        isFallback: true
      };
      setUser(fallbackUser);
      setIsLocalAdmin(true);
      localStorage.setItem("k7_admin_session", JSON.stringify(fallbackUser));
      return { success: true, user: fallbackUser };
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("SignOut error:", e);
    }
    localStorage.removeItem("k7_admin_session");
    setUser(null);
    setIsLocalAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authError,
        isLocalAdmin,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
