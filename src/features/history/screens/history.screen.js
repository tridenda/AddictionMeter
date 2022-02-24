import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { HistoryList } from "../components/history-list.component";
import { ListContainer } from "../components/history.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomButton } from "../../../components/buttons/custom-button.component";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    date: "Sabtu, 2 Januari 2022",
    level: "Berat",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    date: "Senin, 23 February 2022",
    level: "Berat",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    date: "Senin, 23 April 2022",
    level: "Sedang",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    date: "Senin, 23 April 2022",
    level: "Sedang",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    date: "Senin, 23 April 2022",
    level: "Sedang",
  },
];

export const HistoryScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <ListContainer>
          {data.map((item, i) => {
            return (
              <Spacer position="top" size="lg" key={`Detail-${i}`}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Detil Riwayat")}
                >
                  <HistoryList item={item} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ListContainer>
        <TouchableOpacity>
          <CustomButton title="HAPUS SEMUA" />
        </TouchableOpacity>
        <Spacer position="bottom" size="lg" />
      </ScrollView>
    </SafeArea>
  );
};
