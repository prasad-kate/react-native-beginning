import { uiStyles } from "@/styles/global.styles";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const isAuthenticated = false; // TODO: auth setup with api integration

  if (isAuthenticated) {
    return <Redirect href={"/tabs/home"} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={uiStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="registerUser/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginUser/index"
            options={{ headerShown: false }}
          />

          {/* tabs */}
          <Stack.Screen name="tabs" options={{ headerShown: false }} />

          {/* single product screen */}
          <Stack.Screen
            name="singleProductScreen"
            options={{ headerShown: false }}
          />

          {/* details screens */}
          <Stack.Screen name="orderDetails" options={{ headerShown: false }} />
          <Stack.Screen
            name="paymentDetails"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="shippingDetails"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="reviewDetails" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />

          {/* add details screens */}
          <Stack.Screen
            name="addShippingDetails"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="addPaymentDetails"
            options={{ headerShown: false }}
          />

          {/* cart screen */}
          <Stack.Screen name="cartScreen" options={{ headerShown: false }} />

          {/* checkout screen */}
          <Stack.Screen name="checkOut" options={{ headerShown: false }} />

          {/* success screen */}
          <Stack.Screen name="success" options={{ headerShown: false }} />

          {/* not found */}
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Figma
// https://www.figma.com/design/kCs0IYujhamI8C0nglKkbq/Furniture-Shopping---Minimal-UI-Kit-(Community)?node-id=1-32&node-type=canvas&t=MqLFrgRHE50EamOc-0
