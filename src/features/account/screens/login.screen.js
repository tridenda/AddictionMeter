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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountBackground>
      <Text variant="title">Selamat datang!</Text>
      <DescriptionText>
        Masuk dengan akun kamu yang {`\n`}sudah kamu daftarkan sebelumnya
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
      <Spacer position="top" size="lg" />
      <CustomButton title="Masuk" />
      <Spacer position="top" size="lg" />
      <NotesContainer>
        <Text>Belum mempunyai akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
          <Text variant="link">daftar</Text>
        </TouchableOpacity>
      </NotesContainer>
    </AccountBackground>
  );
};
