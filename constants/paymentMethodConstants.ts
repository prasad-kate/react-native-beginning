import paymentMethodMasterCard from "@/assets/images/payment-method-mastercard.png";
import paymentMethodVisaCard from "@/assets/images/payment-method-visa.png";
import { PaymentMethodCardProps } from "@/types";

export const paymentMethods: PaymentMethodCardProps[] = [
  {
    cardNumber: "123456789",
    cardHolderName: "Jennyfer Doe",
    cardType: "mastercard",
    expiryDate: "06/27",
  },
  {
    cardNumber: "123456876",
    cardHolderName: "John Doe",
    cardType: "visa",
    expiryDate: "01/30",
  },
];

export const getCardImageAsPerCardType = (cardType: string) => {
  switch (cardType) {
    case "mastercard":
      return paymentMethodMasterCard;

    case "visa":
      return paymentMethodVisaCard;

    default:
      break;
  }
};
