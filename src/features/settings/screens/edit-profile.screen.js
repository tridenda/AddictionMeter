import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AvoidingView } from "../../../components/utility/avoiding-view.component";
import { Text } from "../../../components/typography/text.component";
import { PrimaryButton } from "../../../components/buttons/primary-button.component";
import { Container } from "../../../components/utility/container.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const EditProfileScreen = ({ route, navigation }) => {
  const { userInfo } = route.params;

  const [email, setEmail] = useState(userInfo.email);
  const [fullName, setFullName] = useState(userInfo.fullName);
  const [intensity, setIntensity] = useState(userInfo.intensity.toString());
  const [phone, setPhone] = useState(userInfo.phone);
  const [startIn, setStartIn] = useState(userInfo.startIn);

  const { onAddUser } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvoidingView>
        <Container>
          <ScrollView>
            <Spacer position="top" size="lg">
              <Text>Terima kasih sudah pasang aplikasi ini.</Text>
              <Spacer size="md" />
              <Text>
                Mohon untuk mengisi profil Anda dibawah ini. Semua data yang
                dihimpun hanya digunakan untuk keperluan skripsi.
              </Text>
              <Spacer size="md" />
              <Text>
                Sebagai ucapan terima kasih, saya ingin memberikan sedikit
                hadiah bagi Anda yang beruntung yang sudah melakukan deteksi
                kecanduan dan mengisi data profil ini.
              </Text>
            </Spacer>

            <Spacer position="top" size="lg" />
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              disabled={true}
              onChangeText={(email) => setEmail(email)}
            />

            <Spacer position="top" size="lg" />
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
              keyboardType="numeric"
              value={intensity}
              right={<TextInput.Affix text="Jam/Hari" />}
              onChangeText={(intensity) => setIntensity(intensity)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Nomor HP"
              keyboardType="numeric"
              mode="outlined"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
            />

            <Spacer position="top" size="lg" />
            <TextInput
              label="Rutin bermain sejak (Contoh: Juli 2022)"
              mode="outlined"
              value={startIn}
              onChangeText={(startIn) => setStartIn(startIn)}
            />

            <Spacer position="top" size="lg">
              <PrimaryButton
                onPress={() =>
                  onAddUser(
                    { email, fullName, intensity, phone, startIn },
                    navigation
                  )
                }
              >
                Perbarui
              </PrimaryButton>
            </Spacer>
          </ScrollView>
        </Container>
      </AvoidingView>
    </SafeArea>
  );
};
