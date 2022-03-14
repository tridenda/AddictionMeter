import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";

import { app, db } from "../../../firebase.config";

export const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const updatePasswordRequest = (user, newPassword) => {
  return updatePassword(user, newPassword);
};

// Not used, just in case want to use this function
export const updateProfileRequest = (userObj) => {
  return updateProfile(auth.currentUser, userObj);
};
