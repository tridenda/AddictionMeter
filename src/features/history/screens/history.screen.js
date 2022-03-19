import React, { useContext } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { HistoryList } from "../components/history-list.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MainContainer } from "../../../components/utility/containers.styles";
import { Text } from "../../../components/typography/text.component";
import { ResultsContext } from "../../../services/history/history.context";
import { EmptyContainer } from "../components/history.styles";
import { PrimaryButton } from "../../../styles/buttons.styles";

export const HistoryScreen = ({ navigation }) => {
  const { results, getResults, deleteAllHistory, isLoading, error } =
    useContext(ResultsContext);

  useFocusEffect(
    React.useCallback(() => {
      getResults();
    }, [])
  );

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          {results.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`Detail-${i}`}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detil Riwayat", {
                      result: item,
                    })
                  }
                >
                  <HistoryList result={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </MainContainer>
        {results.length > 0 ? (
          <PrimaryButton onPress={deleteAllHistory}>
            Hapus Riwayat
          </PrimaryButton>
        ) : (
          <EmptyContainer>
            <Text>Tidak ada riwayat</Text>
          </EmptyContainer>
        )}
        <Spacer position="bottom" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
