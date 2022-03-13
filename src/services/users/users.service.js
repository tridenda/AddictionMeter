import camelize from "camelize";
import "intl";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import { db } from "../../../firebase.config";

export const usersRequest = async () => {
  // 1. get the reference and all the data
  const usersRef = await collection(db, "users");
  const q = await query(usersRef, orderBy("email"));
  const users = await getDocs(q);

  // 2. custom the data and transform to array
  return users.docs.map((doc) => {
    return {
      ...doc.data(),
      // 3. added a document id, useful for changing/deleting the data
      userId: doc.id,
    };
  });
};

export const usersTransform = (users = []) => {
  // custom object with out another value
  const mappedResult = users.map((res) => {
    const startIn = res.startIn.toDate();
    const convertedStartIn = startIn.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
    });

    return {
      ...res,
      // just in case want to add another custom data
      convertedStartIn,
    };
  });

  // camelize the key, example : useName, firstName, etc.
  return camelize(mappedResult);
};
