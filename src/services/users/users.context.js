import React, { useState, createContext, useEffect, useContext } from "react";

import { usersRequest, usersTransform } from "./users.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState([]);

  const { user } = useContext(AuthenticationContext);

  const getUsers = () => {
    setIsloading(true);

    usersRequest()
      .then(usersTransform)
      .then((res) => {
        // filter only retrieve current user data
        const customRes = res.filter((u) => u.email == user.email);

        setUsers(customRes);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        error,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
