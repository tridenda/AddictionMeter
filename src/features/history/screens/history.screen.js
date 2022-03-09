import React, { useContext } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { HistoryList } from "../components/history-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";
import { MainContainer } from "../../../components/utility/containers.styles";

import { ResultsContext } from "../../../services/history/history.context";

export const HistoryScreen = ({ navigation }) => {
  const { results, isLoading, error } = useContext(ResultsContext);

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {results.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`Detail-${i}`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Detil Riwayat")}
                >
                  <HistoryList result={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </MainContainer>
        <TouchableOpacity>
          <CustomButton title="HAPUS SEMUA" />
        </TouchableOpacity>
        <Spacer position="bottom" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
