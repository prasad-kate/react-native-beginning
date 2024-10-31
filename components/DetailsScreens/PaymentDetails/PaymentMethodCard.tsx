import { getCardImageAsPerCardType } from "@/constants/paymentMethodConstants";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { PaymentMethodCardProps } from "@/types";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const PaymentMethodCard = ({
  cardNumber,
  cardHolderName,
  cardType,
  expiryDate,
  isSelectedCard,
}: PaymentMethodCardProps) => {
  const cardImgSrc = getCardImageAsPerCardType(cardType);
  return (
    <ImageBackground
      source={cardImgSrc}
      resizeMode="cover"
      style={detailsScreenStyles.paymentMethodCardContainer}
      imageStyle={detailsScreenStyles.paymentMethodCardImage}
    >
      <Text style={detailsScreenStyles.paymentMethodCardNumber}>
        {`****  ****  ****  ${cardNumber?.slice(cardNumber?.length - 4)}`}
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
