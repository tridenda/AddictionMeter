import React, { useState, createContext, useEffect } from "react";

import {
  requestLevels,
  levelsTransform,
  requestAddLevel,
  requestUpdateLevel,
  requestDeleteLevel,
} from "./levels.service";

export const LevelsContext = createContext();

export const LevelsContextProvider = ({ children }) => {
  const [levels, setLevels] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState([]);

  const getLevels = () => {
    setIsloading(true);

    requestLevels()
      .then(levelsTransform)
      .then((l) => {
        setLevels(l);
        setIsloading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const addLevel = (levelObj) => {
    setIsloading(true);
    // transform the value to float
    levelObj.cfMin = parseFloat(levelObj.cfMin);
    levelObj.cfMax = parseFloat(levelObj.cfMax);

    requestAddLevel(levelObj)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const updateLevel = (levelObj) => {
    setIsloading(true);
    // transform the value to float
    levelObj.cfMin = parseFloat(levelObj.cfMin);
    levelObj.cfMax = parseFloat(levelObj.cfMax);

    requestUpdateLevel(levelObj)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  const deleteLevel = (levelId) => {
    setIsloading(true);

    requestDeleteLevel(levelId)
      .then(() => setIsloading(false))
      .catch((e) => {
        setError(e.toString());
        setIsloading(false);
      });
  };

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <LevelsContext.Provider
      value={{
        levels,
        isLoading,
        error,
        addLevel,
        getLevels,
        updateLevel,
        deleteLevel,
      }}
    >
      {children}
    </LevelsContext.Provider>
  );
};
