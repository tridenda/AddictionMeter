import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  AccountBackground,
  NotesContainer,
  TitleText,
  DescriptionText,
  CustomTextInput,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";

import { AuthenticationContext } from "../../../services/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AvoidingView>
      <AccountBackground>
        <TitleText variant="title">Ayo kita mulai!</TitleText>
        <Spacer position="top" size="md" />
        <DescriptionText>
          Membuat sebuah akun untuk{`\n`}menggunakan aplikasi
        </DescriptionText>
        <Spacer position="top" size="lg" />
        <CustomTextInput
          label="Email"
          mode="outlined"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer position="top" size="md" />
        <CustomTextInput
          label="Kata Sandi"
          mode="outlined"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Spacer position="top" size="md" />
        <CustomTextInput
          label="Konfirmasi Kata Sandi"
          mode="outlined"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          value={repeatedPassword}
          onChangeText={(repeatedPassword) =>
            setRepeatedPassword(repeatedPassword)
          }
        />
        {error && (
          <Spacer size="lg">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer position="top" size="lg" />
        <TouchableOpacity
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          <CustomButton title="Daftar" />
        </TouchableOpacity>
        <Spacer position="top" size="lg" />
        <NotesContainer>
          <Text>Sudah memiliki akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Masuk")}>
            <Text variant="link">masuk</Text>
          </TouchableOpacity>
        </NotesContainer>
      </AccountBackground>
    </AvoidingView>
  );
};