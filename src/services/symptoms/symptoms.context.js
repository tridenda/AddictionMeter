import React, { useState, createContext, useEffect } from "react";

import {
  requestSymptoms,
  symptomsTransform,
  requestAddSymptom,
  requestUpdateSymptom,
  requestDeleteSymptom,
} from "./symptoms.service";

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

  const addSymptom = (symptomObj) => {
    setIsloading(true);
    // transform the value to float
    symptomObj.mb = parseFloat(symptomObj.mb);
    symptomObj.md = parseFloat(symptomObj.md);
    symptomObj.cf = parseFloat(symptomObj.cf);

    requestAddSymptom(symptomObj)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const updateSymptom = (symptomObj) => {
    setIsloading(true);
    // transform the value to float
    symptomObj.mb = parseFloat(symptomObj.mb);
    symptomObj.md = parseFloat(symptomObj.md);
    symptomObj.cf = parseFloat(symptomObj.cf);

    requestUpdateSymptom(symptomObj)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const deleteSymptom = (symptomId) => {
    setIsloading(true);

    requestDeleteSymptom(symptomId)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  useEffect(() => {
    getSymptoms();
  }, []);

  return (
    <SymptomsContext.Provider
      value={{
        symptoms,
        isLoading,
        error,
        addSymptom,
        getSymptoms,
        updateSymptom,
        deleteSymptom,
      }}
    >
      {children}
    </SymptomsContext.Provider>
  );
};
