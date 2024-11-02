import { ReviewDetailsCardProps } from "@/types";

// product images
import product_table from "@/assets/images/product-coffee-table.png";
import product_coffee_chair from "@/assets/images/product-coffee-chair.png";
import product_lamp from "@/assets/images/product-coffee-table.png";

export const productReviews: ReviewDetailsCardProps[] = [
  {
    name: "Coffee Table",
    price: "35",
    image: product_table,
    numberOfStars: 4.8,
    date: "09/11/24",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price",
  },
  {
    name: "Coffee Chair",
    price: "20",
    image: product_coffee_chair,
    numberOfStars: 3.5,
    date: "09/11/24",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price",
  },
  {
    name: "Lamp",
    price: "25",
    image: product_lamp,
    numberOfStars: 4,
    date: "09/11/24",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price",
  },
];
