import React, { useState, createContext, useEffect } from "react";

import { requestSymptoms, symptomsTransform } from "./symptoms.service";

export const SymptomsContext = createContext();

export const SymptomsContextProvider = ({ children }) => {
  const [symptoms, setSymptoms] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState([]);

  const getSymptoms = () => {
    setIsloading(true);

    requestSymptoms()
      .then(symptomsTransform)
      .then((s) => {
        setSymptoms(s);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  useEffect(() => {
    getSymptoms();
  }, []);

  return (
    <SymptomsContext.Provider value={{ symptoms, isLoading, error }}>
      {children}
    </SymptomsContext.Provider>
  );
};
