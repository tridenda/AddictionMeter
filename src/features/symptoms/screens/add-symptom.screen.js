import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";

import { SymptomsContext } from "../../../services/symptoms/symptoms.context";

const FormContainer = styled.View`
  flex-direction: row;
`;

const MBInput = styled(TextInput)`
  flex: 1;
  margin-right: 5px;
`;

const MDInput = styled(TextInput)`
  flex: 1;
  margin-left: 5px;
`;

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
              value={symptomName}
              onChangeText={(symptomName) => setSymptomName(symptomName)}
            />

            <Spacer position="top" size="lg" />
            <FormContainer>
              <MBInput
                label="Minimal CF"
                mode="outlined"
                value={mb}
                onChangeText={(mb) => setMb(mb)}
              />
              <MDInput
                label="Maksimal CF"
                mode="outlined"
                value={md}
                onChangeText={(md) => setMd(md)}
              />
            </FormContainer>

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nilai CF"
              mode="outlined"
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
              <TouchableOpacity
                onPress={() => {
                  addSymptom(code, symptomName, cf, description, question);
                  setCode("");
                  setSymptomName("");
                  setCf("");
                  setDescription("");
                  setQuestion("");
                }}
              >
                <CustomButton title="Tambah" />
              </TouchableOpacity>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </AvoidingView>
    </SafeArea>
  );
};
