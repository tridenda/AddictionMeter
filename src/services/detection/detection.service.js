import camelize from "camelize";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  addDoc,
} from "firebase/firestore";

import { db } from "../../../firebase.config";

export const symptomsRequest = async () => {
  // 1. get the reference doc and all symptoms data
  const symptomsRef = await collection(db, "symptoms");
  const q = await query(symptomsRef, orderBy("code"));
  const symptoms = await getDocs(q);

  // 2. customize the object and change to an array
  return symptoms.docs.map((symptom) => {
    return {
      ...symptom.data(),
      // 3. added document id
      symptomId: symptom.id,
    };
  });
};

export const symptomsTranformation = (symptoms = []) => {
  // custom object with our another value
  const mappedSymptoms = symptoms.map((symptom) => {
    return {
      ...symptom,
      // just in case want to add new custom data
    };
  });

  // camelize the key, example: "userName", "firstName", etc.
  return camelize(mappedSymptoms);
};

export const getCfCombine = (cfValues) => {
  return cfValues.reduce((previousValue, currentValue) => {
    return previousValue + currentValue * (1 - previousValue);
  }, 0);
};

export const getLevel = async (cfCombine) => {
  // 1. get the reference doc and all symptoms data
  const levelsRef = await collection(db, "levels");
  const q = await query(levelsRef, orderBy("code"));
  const levels = await getDocs(q);

  // 2. customize the object and change to an array
  const customLevels = levels.docs.map((level) => {
    return {
      ...level.data(),
    };
  });

  // 3. filter only certain level and return it
  return customLevels.filter((item) => {
    return cfCombine >= item.cfMin && cfCombine <= item.cfMax;
  });
};

export const addResultRequest = async (resultObj) => {
  // add current date to the object
  resultObj.date = Timestamp.now();

  // push the object and add the data to firebase
  await addDoc(collection(db, "results"), resultObj);

  return resultObj;
};

// -1
// -0.9
// -0.8
// -0.7
// -0.6
// -0.5
// -0.4 -
// -0.3
// -0.2
// -0.1
// 0
// 0.1
// 0.2
// 0.3 -
// 0.4
// 0.5
// 0.6
// 0.7
// 0.8
// 0.9
// 1