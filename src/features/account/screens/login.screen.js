import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  NotesContainer,
  TitleText,
  DescriptionText,
  CustomTextInput,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AvoidingView>
      <AccountBackground>
        <TitleText variant="title">Selamat datang!</TitleText>
        <Spacer position="top" size="md" />
        <DescriptionText>
          Masuk dengan akun kamu yang {`\n`}sudah kamu daftarkan sebelumnya
        </DescriptionText>
        <Spacer position="top" size="lg">
          <CustomTextInput
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </Spacer>
        <Spacer position="top" size="md">
          <CustomTextInput
            label="Kata Sandi"
            mode="outlined"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="lg">
          {!isLoading ? (
            <PrimaryButton onPress={() => onLogin(email, password)}>
              Masuk
            </PrimaryButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer position="top" size="lg" />
        <NotesContainer>
          <Text>Belum mempunyai akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
            <Text variant="link">daftar</Text>
          </TouchableOpacity>
        </NotesContainer>
      </AccountBackground>
    </AvoidingView>
  );
};
