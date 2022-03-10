import camelize from "camelize";
import "intl";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../../firebase.config";

export const requestResults = async () => {
  // 1. get the reference and all the data
  const resultsRef = await collection(db, "results");
  const q = await query(resultsRef, orderBy("date", "desc"));
  const results = await getDocs(q);

  // 2. custom the data and transform to array
  return results.docs.map((doc) => {
    return {
      ...doc.data(),
      // 3. added a document id, useful for changing/deleting the data
      resultId: doc.id,
    };
  });
};

export const requestDeleteResult = async (resultId) => {
  // delete level data from firebase document
  await deleteDoc(doc(db, "results", resultId));
};

export const resultsTransform = (results = []) => {
  // custom object with out another value
  const mappedResult = results.map((res) => {
    const date = res.date.toDate();
    const convertedDate = date.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      ...res,
      // just in case want to add another custom data
      convertedDate,
    };
  });

  // camelize the key, example : useName, firstName, etc.
  return camelize(mappedResult);
};
