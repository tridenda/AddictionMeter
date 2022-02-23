import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { Text } from "../../../components/typography/text.component";
import { DetailContainer, Highlight } from "../components/result.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const ResultScreen = () => {
  return (
    <SafeArea>
      <DetailContainer>
        <Text>
          Berdasarkan pertanyaan serta jawaban yang kamu jawab. Kemungkinan
          tingkat kecanduan kamu terhadap online game yaitu.
        </Text>
        <Spacer position="top" size="lg">
          <Highlight>
            <Text variant="highlight">Sedang</Text>
          </Highlight>
        </Spacer>
        <Spacer position="top" size="lg" />
        <Text variant="title">Saran:</Text>
        <Text>
          Lakukan kegiatan atau aktivitas positif, bangun komunikasi dengan
          sesama, dan menjaga kesehatan fisik serta pikirian.
        </Text>
        <Spacer position="top" size="sm" />
        <Text>
          Terkahir sadari bahwa bermain online game akan berdampak hilangnya
          relasi dengan orang lain, dan sebaiknya lanjut untuk konsultasi dengan
          psikolog/psikiater.
        </Text>
      </DetailContainer>
      <Spacer position="top" size="lg" />
      <CustomButton title="KEMBALI KE BERANDA" />
    </SafeArea>
  );
};
