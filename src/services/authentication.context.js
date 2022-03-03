import React, { useState, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth, loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  const onLogin = (email, password) => {
    setIsloading(true);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsloading(true);
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }

    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
    setError([]);
  };

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsloading(false);
    } else {
      setIsloading(false);
    }
  });

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
