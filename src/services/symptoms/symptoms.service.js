import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  doc,
} from "firebase/firestore";
import camelize from "camelize";

import { db } from "../../../firebase.config";

export const requestSymptoms = async () => {
  const symptomsRef = await collection(db, "symptoms");
  const q = await query(symptomsRef, orderBy("code"));
  const symptoms = await getDocs(q);

  return symptoms.docs.map((doc) => doc.data());
};

export const requestAddSymptom = async (
  code,
  symptomName,
  cf,
  description,
  question
) => {
  await addDoc(collection(db, "symptoms"), {
    code,
    symptomName,
    cf,
    description,
    question,
  });
};

export const symptomsTransform = (results = []) => {
  const mappedResult = results.map((symptoms) => {
    return {
      ...symptoms,
    };
  });

  return camelize(mappedResult);
};
