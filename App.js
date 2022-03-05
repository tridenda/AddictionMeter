import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import {
  useFonts as useCaladea,
  Caladea_400Regular,
  Caladea_700Bold,
} from "@expo-google-fonts/caladea";

import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
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
