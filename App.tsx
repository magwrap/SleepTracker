import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Routes from "@/navigation/Routes";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/state";
import { StatusBar } from "react-native";
import LoadingScreen from "@/screens/LoadingScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.blueGrey400,
      accent: Colors.amber600,
    },
  };

  if (!isLoadingComplete) {
    return <LoadingScreen />;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
          <StatusBar />
        </PaperProvider>
      </Provider>
    );
  }
}
