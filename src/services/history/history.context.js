import React, { useState, createContext, useEffect } from "react";

import { requestResults, resultsTransform } from "./history.service";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState([]);

  const getResults = () => {
    setIsloading(true);

    requestResults()
      .then(resultsTransform)
      .then((res) => {
        setResults(res);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <ResultsContext.Provider
      value={{
        results,
        isLoading,
        error,
        getResults,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
