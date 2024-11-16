import BackButtonHeader from "@/components/BackButtonHeader";
import ReviewDetailsSection from "@/components/ReviewDetails/ReviewDetailsSection";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const ReviewDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="My Reviews" />
      <ReviewDetailsSection />
    </View>
  );
};

export default ReviewDetails;
