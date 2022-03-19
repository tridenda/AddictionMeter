import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";
import { MBInput, MDInput, FormContainer } from "../components/symptoms.styles";

import { SymptomsContext } from "../../../services/symptoms/symptoms.context";

export const AddSymptomScreen = () => {
  const [code, setCode] = useState("");
  const [symptomName, setSymptomName] = useState("");
  const [md, setMd] = useState("");
  const [mb, setMb] = useState("");
  const [cf, setCf] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");

  const { addSymptom } = useContext(SymptomsContext);

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
                  addSymptom({
                    code,
                    symptomName,
                    mb,
                    md,
                    cf,
                    description,
                    question,
                  });
                  setCode("");
                  setSymptomName("");
                  setMb("");
                  setMd("");
                  setCf("");
                  setDescription("");
                  setQuestion("");
                }}
              >
                Tambah
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </Container>
      </AvoidingView>
    </SafeArea>
  );
};
