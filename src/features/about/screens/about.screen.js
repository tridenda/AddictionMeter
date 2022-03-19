import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Container } from "../../../components/utility/container.component";

export const AboutScreen = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Text>
            Aplikasi ini dibuat untuk siapapun yang ingin mengetahui tingkat
            kecanduan bermain online game (OG), namun tidak untuk permainan
            judi.
          </Text>
          <Spacer position="top" size="md" />
          <Text>
            Aplikasi ini merupakan sistem pakar yang menggunakan metode
            certainty factor untuk mengolah keputusan.
          </Text>
          <Spacer position="top" size="md" />
          <Spacer position="left" size="md">
            <Text>
              Gejala kecanduan OG:
              {`\n`}
              1. Sibuk bermain game di internet
              {`\n`}
              2. Mudah tersinggung, cemas, sedih
              {`\n`}
              3. Waktu bermain bertambah
              {`\n`}
              4. Sulit mengontrol untuk berhenti bermain game
              {`\n`}
              5. Kehilangan gairah melakukan aktivitas lain
              {`\n`}
              6. Meskipun tahu dampak buruk namun tidak dihiraukan
              {`\n`}
              7. Berbohong terkait jumlah bermain
              {`\n`}
              8. Bermain game sebagai pengalihan emosi negatif
              {`\n`}
              9. Kehilangan hal penting seperti karir, pendidikan ataupun
              lainnya
              {`\n`}
            </Text>
          </Spacer>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
