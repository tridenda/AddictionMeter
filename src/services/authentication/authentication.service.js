import "intl";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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

export const userRequest = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const startIn = userSnap.data().startIn.toDate();
    const convertedStartIn = startIn.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
    });

    return {
      ...userSnap.data(),
      convertedStartIn,
    };
  } else {
    return {
      email: user.email,
      fullName: "<Belum Terisi>",
      intensity: "0",
      phone: "0123456789",
      startIn: {
        nanoseconds: 0,
        seconds: 164787313320,
      },
      userLevel: "",
      convertedStartIn: "<belum terisi>",
    };
  }
};
