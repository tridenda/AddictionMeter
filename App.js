import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
