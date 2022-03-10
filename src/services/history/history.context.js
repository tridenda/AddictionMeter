import React, { useState, createContext, useEffect, useContext } from "react";

import {
  requestDeleteResult,
  requestResults,
  resultsTransform,
} from "./history.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState([]);

  const { user } = useContext(AuthenticationContext);

  const getResults = () => {
    setIsloading(true);

    requestResults()
      .then(resultsTransform)
      .then((res) => {
        // filter only retrieve current user data
        const customRes = res.filter((r) => r.email == user.email);

        setResults(customRes);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const deleteAllHistory = () => {
    results.map((item) => {
      requestDeleteResult(item.resultId);
    });

    getResults();
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
        deleteAllHistory,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
