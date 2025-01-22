import { paymentMethods } from "@/constants/paymentMethodConstants";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useState } from "react";
import { FlatList } from "react-native";
import PaymentCardSelectionCheckbox from "./PaymentCardSelectionCheckbox";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentMethods = () => {
  // TODO: make this dynamic
  const [selectedCard, setSelectedCard] = useState<null | string>(
    paymentMethods?.[0].cardNumber
  );

  return (
    <FlatList
      data={paymentMethods}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ cardNumber }) => cardNumber}
      style={detailsScreenStyles.paymentMethodsContainer}
      renderItem={({ item }) => {
        const { cardNumber, cardHolderName, cardType, expiryDate } = item;
        return (
          <>
            <PaymentMethodCard
              cardNumber={cardNumber}
              cardHolderName={cardHolderName}
              cardType={cardType}
              expiryDate={expiryDate}
              isSelectedCard={cardNumber === selectedCard}
            />
            <PaymentCardSelectionCheckbox
              cardNumber={cardNumber}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </>
        );
      }}
    />
  );
};

export default PaymentMethods;
