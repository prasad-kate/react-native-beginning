import { ReviewDetailsCardProps } from "@/types";
import { FlatList } from "react-native";
import ReviewDetailsCard from "./ReviewDetailsCard";

const ReviewDetailsSection = ({
  productReviews,
}: {
  productReviews: ReviewDetailsCardProps[];
}) => {
  return (
    <FlatList
      data={productReviews}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        const { name, image, date, numberOfStars, price, review } = item;
        return (
          <ReviewDetailsCard
            name={name}
            image={image}
            date={date}
            price={price}
            review={review}
            numberOfStars={numberOfStars}
          />
        );
      }}
    />
  );
};

export default ReviewDetailsSection;
