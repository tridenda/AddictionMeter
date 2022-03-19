import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";
import { FormContainer, MBInput, MDInput } from "../components/symptoms.styles";

import { SymptomsContext } from "../../../services/symptoms/symptoms.context";

export const EditSymptomScreen = ({ navigation, route }) => {
  // retrieve data from another page using route navigation
  const { symptom } = route.params;

  const [code, setCode] = useState(symptom.code);
  const [symptomName, setSymptomName] = useState(symptom.symptomName);
  const [mb, setMb] = useState(symptom.mb.toString());
  const [md, setMd] = useState(symptom.md.toString());
  const [cf, setCf] = useState(symptom.cf.toString());
  const [description, setDescription] = useState(symptom.description);
  const [question, setQuestion] = useState(symptom.question);

  const { updateSymptom, isLoading, error } = useContext(SymptomsContext);

  return (
    <SafeArea>
      <AvoidingView>
        <Container>
          <ScrollView>
            <TextInput
              label="Kode"
              mode="outlined"
              value={code}
              onChangeText={(code) => setCode(code)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nama Gejala"
              mode="outlined"
              value={symptomName}
              onChangeText={(symptomName) => setSymptomName(symptomName)}
            />

            <Spacer position="top" size="lg" />
            <FormContainer>
              <MBInput
                label="Nilai MB"
                mode="outlined"
                keyboardType="numeric"
                value={mb}
                onChangeText={(mb) => {
                  setMb(mb);
                }}
              />
              <MDInput
                label="Nilai MD"
                mode="outlined"
                keyboardType="numeric"
                value={md}
                onChangeText={(md) => setMd(md)}
              />
            </FormContainer>

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nilai CF"
              mode="outlined"
              keyboardType="numeric"
              value={cf}
              onChangeText={(cf) => setCf(cf)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Keterangan"
              mode="outlined"
              style={{ height: 150 }}
              multiline={true}
              value={description}
              onChangeText={(description) => setDescription(description)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Pertanyaan"
              mode="outlined"
              style={{ height: 150 }}
              multiline={true}
              value={question}
              onChangeText={(question) => setQuestion(question)}
            />

            <Spacer position="top" size="lg">
              <PrimaryButton
                onPress={() => {
                  updateSymptom({
                    symptomId: symptom.symptomId,
                    code,
                    symptomName,
                    mb,
                    md,
                    cf,
                    description,
                    question,
                  });
                  navigation.navigate("Data Gejala");
                }}
              >
                Ubah
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </Container>
      </AvoidingView>
    </SafeArea>
  );
};
