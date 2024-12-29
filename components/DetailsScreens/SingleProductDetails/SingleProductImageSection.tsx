import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { SingleProductImageSectionProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const SingleProductImageSection = ({
  imgUrl,
}: SingleProductImageSectionProps) => {
  const router = useRouter();

  return (
    <View style={singleProductScreenStyles.productImageContainer}>
      <ImageBackground
        source={{ uri: imgUrl }}
        style={[
          singleProductScreenStyles.productImage,
          {
            backgroundColor: !imgUrl ? "#ededed" : undefined,
          },
        ]}
        imageStyle={{
          borderBottomLeftRadius: 52,
        }}
        resizeMode="cover"
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={singleProductScreenStyles.backButtonContainer}
          onPress={() => {
            router.push("/tabs/home");
          }}
        >
          <Ionicons name="chevron-back" size={22} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SingleProductImageSection;
