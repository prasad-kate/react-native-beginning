import BackButtonHeader from "@/components/BackButtonHeader";
import OrderDetailsEmptySection from "@/components/DetailsScreens/OrderDetails/OrderDetailsEmptySection";
import ReviewDetailsSection from "@/components/ReviewDetails/ReviewDetailsSection";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ReviewDetailsCardProps } from "@/types";
import { View } from "react-native";

const ReviewDetails = () => {
  // TODO: make this list dynamic
  const productReviews: ReviewDetailsCardProps[] = [];
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="My Reviews" />
      {productReviews?.length ? (
        <ReviewDetailsSection productReviews={productReviews} />
      ) : (
        <OrderDetailsEmptySection />
      )}
    </View>
  );
};

export default ReviewDetails;
