import paymentMethodMasterCard from "@/assets/images/payment-method-mastercard.png";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { PaymentMethodCardProps } from "@/types";
import { ImageBackground, Text, View } from "react-native";

const PaymentMethodCard = ({
  cardNumber,
  cardHolderName,
  expiryDate,
}: PaymentMethodCardProps) => {
  const isSelectedCard = false;
  return (
    <ImageBackground
      source={paymentMethodMasterCard}
      resizeMode="cover"
      style={detailsScreenStyles.paymentMethodCardContainer}
      imageStyle={[
        detailsScreenStyles.paymentMethodCardImage,
        {
          opacity: isSelectedCard ? 1 : 0.7,
        },
      ]}
    >
      <Text style={detailsScreenStyles.paymentMethodCardNumber}>
        {`****  ****  ****  ${cardNumber}`}
      </Text>
      <View
        style={detailsScreenStyles.paymentMethodsCardHolderDetailsContainer}
      >
        <View>
          <Text style={detailsScreenStyles.paymentMethodCardTitleText}>
            Card Holder Name
          </Text>
          <Text style={detailsScreenStyles.paymentMethodCardValueText}>
            {cardHolderName}
          </Text>
        </View>
        <View>
          <Text style={detailsScreenStyles.paymentMethodCardTitleText}>
            Expirty Date
          </Text>
          <Text style={detailsScreenStyles.paymentMethodCardValueText}>
            {expiryDate}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PaymentMethodCard;
