import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const SingleProductImageSection = () => {
  const router = useRouter();

  return (
    <View style={singleProductScreenStyles.productImageContainer}>
      <ImageBackground
        source={require("@/assets/images/product-coffee-chair.png")}
        style={singleProductScreenStyles.productImage}
        imageStyle={{
          borderBottomLeftRadius: 52,
        }}
        resizeMode="cover"
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={singleProductScreenStyles.backButtonContainer}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="chevron-back" size={22} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SingleProductImageSection;
