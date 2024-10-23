import Boarding from "@/components/Boarding";
import { uiStyles } from "@/styles/global.styles";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={uiStyles.container}>
      <Boarding />
    </SafeAreaView>
  );
};

export default App;
