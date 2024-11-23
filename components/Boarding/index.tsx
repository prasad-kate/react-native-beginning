import useAuthStore from "@/store/authStore";
import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import Button from "../ui/Button";
import { boardingStyles } from "./styles/boarding.styles";

const Boarding = () => {
  const router = useRouter();
  const { authToken } = useAuthStore();
  return (
    <ImageBackground
      source={require("@/assets/images/furniture-app-first-bg.png")}
      style={boardingStyles.backgroundImage}
      resizeMode="cover"
    >
      <View style={boardingStyles.textContainer}>
        <View style={boardingStyles.welcomeTextContainer}>
          <Text style={boardingStyles.textMakePart} numberOfLines={1}>
            Make Your Home
          </Text>
          <Text style={boardingStyles.textBeautiful}>Beautiful</Text>
        </View>
        <Text style={boardingStyles.textDescription}>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </Text>
      </View>

      <View style={boardingStyles.boardingButtonContainer}>
        <Button
          text="Get Started"
          onPress={() => {
            if (authToken) {
              return router.push("/tabs/home");
            }
            if (!authToken) {
              return router.navigate("/registerUser");
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Boarding;
