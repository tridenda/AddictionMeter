import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  AccountBackground,
  NotesContainer,
  DescriptionText,
  CustomTextInput,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  return (
    <AccountBackground>
      <Text variant="title">Ayo kita mulai!</Text>
      <DescriptionText>
        Membuat sebuah akun untuk menggunakan aplikasi
      </DescriptionText>
      <Spacer position="top" size="lg" />
      <CustomTextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <CustomTextInput
        label="Kata Sandi"
        mode="outlined"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <CustomTextInput
        label="Konfirmasi Kata Sandi"
        mode="outlined"
        value={confirmationPassword}
        onChangeText={(confirmationPassword) =>
          setConfirmationPassword(confirmationPassword)
        }
      />
      <Spacer position="top" size="lg" />
      <CustomButton title="Daftar" />
      <Spacer position="top" size="lg" />
      <NotesContainer>
        <Text>Sudah memiliki akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Masuk")}>
          <Text variant="link">masuk</Text>
        </TouchableOpacity>
      </NotesContainer>
    </AccountBackground>
  );
};
