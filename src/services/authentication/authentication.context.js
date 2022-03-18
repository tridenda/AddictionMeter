import React, { useState, createContext, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import {
  addUserRequest,
  auth,
  loginRequest,
  registerRequest,
  updatePasswordRequest,
  userRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
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
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }

    setIsloading(true);
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
    setUserInfo(null);
  };

  const reauthenticate = (currentPassword) => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    return reauthenticateWithCredential(user, credential);
  };

  const onUpdatePassword = (
    currentPassword,
    newPassword,
    repeatedNewPassword,
    navigation
  ) => {
    setIsloading(true);
    const user = auth.currentUser;

    // 1. Verify if the new passwords are the same and not empty
    if (
      newPassword.length > 0 &&
      repeatedNewPassword.length > 0 &&
      newPassword === repeatedNewPassword
    ) {
      const password = newPassword;

      // 2. Reauthenticate the user if want to change the password
      reauthenticate(currentPassword)
        .then(() => {
          // 3. Change the password if reautheticate was success
          updatePasswordRequest(user, password)
            .then(() => {
              setIsloading(false);
              setError([]);
              // navigate to pengaturan page
              navigation.navigate("Pengaturan");
            })
            .catch((e) => {
              // set the error message if update password is failed
              setError(e.toString());
              setIsloading(false);
            });
        })
        .catch((e) => {
          // set the error message if it isn't authenticated
          setIsloading(false);
          setError(e.toString());
        });
    } else {
      setError("Error: Password doesn't match or hasn't filled");
    }
  };

  const onGetUser = () => {
    userRequest(user)
      .then((usr) => {
        setUserInfo(usr);
      })
      .catch(() => {});
  };

  const onAddUser = (userObj, navigation) => {
    if (userInfo.userLevel == "admin") {
      userObj.userLevel = userInfo.userLevel;
    }

    addUserRequest(userObj, user.uid)
      .then(() => {
        navigation.navigate("Pengaturan");
      })
      .catch(() => {});
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
        userInfo,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        onUpdatePassword,
        setError,
        onGetUser,
        onAddUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
