import React, { createContext, useState, useEffect, useContext } from "react";

import {
  symptomsRequest,
  symptomsTranformation,
  getCfCombine,
  getLevel,
  addResultRequest,
} from "./detection.service";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const DetectionContext = createContext();

export const DetectionContextProvider = ({ children }) => {
  const { user, userInfo } = useContext(AuthenticationContext);
  const [symptoms, setSymptoms] = useState(null);
  const [questionOrder, setQuestionOrder] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const options = [
    ["A. Pasti", 1],
    ["B. Hampir pasti", 0.8],
    ["C. Mungkin", 0.5],
    ["D. Mungkin tidak", 0.2],
    ["E. Pasti tidak", 0],
  ];

  const getSymptoms = () => {
    setIsLoading(true);
    symptomsRequest()
      .then(symptomsTranformation)
      .then((symptoms) => {
        setIsLoading(false);
        setSymptoms(symptoms);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const onSubmit = (value, navigation) => {
    setIsLoading(true);
    // navigation will show result only if the user answers all questions
    if (questionOrder + 1 >= symptoms.length) {
      // this step will push an object to firebase and return it to "Hasil"
      // .........................
      // object = {
      //   email: "tri@denda.com",
      //   levelName: "Berat",
      //   date: <timestamp>,
      //   cf: 0.8,
      //   questions: ["q1", "q2", .... "qn"],
      //   answers: [1, 2 .... n]
      // }
      // .........................

      // 1. Add the last answer from user to answers array
      answers.push(value);

      // 2. Multiply each expert CF with each user CF
      // Formula: CF = Expert CF * User CF
      // CF1 = Expert CF1 * User CF1
      // CF2 = Expert CF2 * User CF2
      // ...
      // CFn = Expert CFn * User CFn
      // will return an array => [CF1, CF2, ...CFn]
      const multipliedByUserCf = symptoms.map((symptom, i) => {
        return symptom.cf * answers[i];
      });

      // 2. Get CF combine
      const cfCombine = getCfCombine(multipliedByUserCf);

      // 3. Get the level and solution by using CF combine
      getLevel(cfCombine)
        .then((level) => {
          return level[0];
        })
        .then((level) => {
          // 4. collect all questions from symptoms into an array
          const questions = symptoms.map((symptom) => {
            return symptom.question;
          });

          // 5. Push to firebase
          addResultRequest({
            email: user.email,
            levelName: level.levelName,
            // date will added by the function
            cf: cfCombine,
            solution: level.solution,
            questions,
            answers,
          })
            .then((res) => {
              // 6. reset the answers and the order then navigate to "hasil"
              setIsLoading(false);
              setQuestionOrder(0);
              setAnswers([]);

              res.cfValue = Math.round(res.cf * 10000) / 10000;
              navigation.navigate("Hasil", {
                result: res,
              });
              console.log(userInfo.unUpdated);
              if (userInfo.unUpdated) {
                setTimeout(() => {
                  navigation.navigate("Ubah Profil", { userInfo });
                }, 20000);
              }
            })
            .catch((e) => {
              setError(e.toString());
              setIsLoading(false);
            });
        })
        .catch((e) => {
          setError(e.toString());
          setIsLoading(false);
        });
    } else {
      answers.push(value);
      navigation.navigate("Deteksi Kecanduan");
      setQuestionOrder(questionOrder + 1);
    }
  };

  const onBack = (navigation) => {
    if (answers.length > 0) answers.pop();

    setQuestionOrder(questionOrder - 1);
    navigation.navigate("Deteksi Kecanduan");
  };

  useEffect(() => {
    getSymptoms();
  }, []);

  return (
    <DetectionContext.Provider
      value={{
        options,
        error,
        isLoading,
        symptoms,
        questionOrder,
        answers,
        onSubmit,
        onBack,
      }}
    >
      {children}
    </DetectionContext.Provider>
  );
};
