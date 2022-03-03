import { collection, getDocs } from "firebase/firestore";
import camelize from "camelize";

import { db } from "../../../firebase.config";

export const requestSymptoms = async () => {
  const symptoms = await getDocs(collection(db, "symptoms"));

  return symptoms.docs.map((doc) => doc.data());
};

export const symptomsTransform = (results = []) => {
  const mappedResult = results.map((symptoms) => {
    return {
      ...symptoms,
    };
  });

  return camelize(mappedResult);
};
