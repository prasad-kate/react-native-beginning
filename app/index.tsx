import Boarding from "@/components/Boarding";
import { uiStyles } from "@/styles/global.styles";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={uiStyles.container}>
      <StatusBar barStyle="dark-content" />
      <Boarding />
    </SafeAreaView>
  );
};

export default App;
