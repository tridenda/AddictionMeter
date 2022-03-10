import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Platform } from "react-native";

import {
  useFonts as useCaladea,
  Caladea_400Regular,
  Caladea_700Bold,
} from "@expo-google-fonts/caladea";

import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// intl is needed if want to use toLocaleString() on android
// It is needed because in android (Hermes engine) still use old JScore
if (Platform.OS == "android") {
  require("intl");
  require("intl/locale-data/jsonp/id-ID");
}

export default function App() {
  // use fonts from expo google fonts
  const [CaladeaLoaded] = useCaladea({
    Caladea_400Regular,
    Caladea_700Bold,
  });

  if (!CaladeaLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
