import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";

export const AddSymptomScreen = () => {
  const [code, setCode] = useState("");
  const [symptom, setSymptom] = useState("");
  const [certaintyFactorValue, setCertaintyFactorValue] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <SafeArea>
      <AvoidingView>
        <MainContainer>
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
              value={symptom}
              onChangeText={(symptom) => setSymptom(symptom)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nilai CF"
              mode="outlined"
              value={certaintyFactorValue}
              onChangeText={(certaintyFactorValue) =>
                setCertaintyFactorValue(certaintyFactorValue)
              }
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
              <TouchableOpacity>
                <CustomButton title="Tambah" />
              </TouchableOpacity>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </AvoidingView>
    </SafeArea>
  );
};
