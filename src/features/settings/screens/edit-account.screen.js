import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { UsersContext } from "../../../services/users/users.context";

export const EditAccountScreen = ({ route }) => {
  const { userInfo } = route.params;
  const [fullName, setFullName] = useState(userInfo.fullName);
  const [intensity, setIntensity] = useState(userInfo.intensity);
  const [startIn, setStartIn] = useState(userInfo.startIn);
  const [phone, setPhone] = useState(userInfo.phone);

  const { user } = useContext(AuthenticationContext);
  const { addUser, editUser } = useContext(UsersContext);

  return (
    <SafeArea>
      <AvoidingView>
        <MainContainer>
          <ScrollView>
            <TextInput
              label="Nama Lengkap"
              mode="outlined"
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Intensitas Bermain"
              mode="outlined"
              value={intensity}
              onChangeText={(intensity) => setIntensity(intensity)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Bermain sejak"
              mode="outlined"
              value={startIn}
              onChangeText={(startIn) => setStartIn(startIn)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nomor HP"
              mode="outlined"
              value={phone}
              keyboardType="numeric"
              onChangeText={(phone) => setPhone(phone)}
            />

            <Spacer position="top" size="lg">
              <TouchableOpacity
                onPress={() => {
                  if (userInfo.email.length == 0) {
                    addUser({
                      email: user.email,
                      fullName,
                      intensity,
                      phone,
                      startIn,
                    });
                  } else {
                    editUser({
                      email: user.email,
                      fullName,
                      intensity,
                      phone,
                      startIn,
                    });
                  }
                }}
              >
                <CustomButton title="Ubah" />
              </TouchableOpacity>
            </Spacer>
          </ScrollView>
        </MainContainer>
      </AvoidingView>
    </SafeArea>
  );
};
