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
import camelize from "camelize";

import { db } from "../../../firebase.config";
import { async } from "@firebase/util";

export const requestSymptoms = async () => {
  // 1. get the reference and all the data
  const symptomsRef = await collection(db, "symptoms");
  const q = await query(symptomsRef, orderBy("code"));
  const symptoms = await getDocs(q);

  // 2. custom the data and transform to array
  return symptoms.docs.map((doc) => {
    return {
      ...doc.data(),
      // 3. added a document id will useful for changing the data later
      symptomId: doc.id,
    };
  });
};

export const requestAddSymptom = async (symptomObj) => {
  // push the object and add the data to firebase
  await addDoc(collection(db, "symptoms"), symptomObj);
};

export const requestUpdateSymptom = async (symptomObj) => {
  // 1. get symptomRef using doc()
  const symptomRef = doc(db, "symptoms", symptomObj.symptomId);
  // 2. delete id value from the object
  delete symptomObj.symptomId;

  // 3. push the object and update the data to firebase
  await updateDoc(symptomRef, symptomObj);
};

export const requestDeleteSymptom = async (symptomId) => {
  // delete symptom data from firebase document
  await deleteDoc(doc(db, "symptoms", symptomId));
};

export const symptomsTransform = (results = []) => {
  // custom object with our another value
  const mappedResult = results.map((symptoms) => {
    return {
      ...symptoms,
      // just in case want to add new custom data
    };
  });

  // camelize the key, example: "userName", "firstName", etc.
  return camelize(mappedResult);
};
