import camelize from "camelize";
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase.config";

export const requestLevels = async () => {
  // 1. get the reference and all the data
  const levelsRef = await collection(db, "levels");
  const q = await query(levelsRef, orderBy("code"));
  const levels = await getDocs(q);

  // 2. custom the data and transform to array
  return levels.docs.map((doc) => {
    return {
      ...doc.data(),
      // 3. added a document id will useful for changing the data later
      levelId: doc.id,
    };
  });
};

export const requestAddLevel = async (levelObj) => {
  // push the object and add the data to firebase
  await addDoc(collection(db, "levels"), levelObj);
};

export const requestUpdateLevel = async (levelObj) => {
  // 1. get levelsRef using doc()
  const levelsRef = doc(db, "levels", levelObj.levelId);
  // 2. delete id value from the object
  delete levelObj.levelId;

  // 3. push the object and update the data to firebase
  await updateDoc(levelsRef, levelObj);
};

export const requestDeleteLevel = async (levelId) => {
  // delete level data from firebase document
  await deleteDoc(doc(db, "levels", levelId));
};

export const levelsTransform = (results = []) => {
  // custom object with our another value
  const mappedResult = results.map((levels) => {
    return {
      ...levels,
      // just in case want to add new custom data
    };
  });

  // camelize the key, example: "userName", "firstName", etc.
  return camelize(mappedResult);
};
