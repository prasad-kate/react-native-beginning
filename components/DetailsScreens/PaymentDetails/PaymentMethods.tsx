import { paymentMethods } from "@/constants/paymentMethodConstants";
import { useGetCardList } from "@/services/payment.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useState } from "react";
import { FlatList } from "react-native";
import PaymentCardSelectionCheckbox from "./PaymentCardSelectionCheckbox";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentMethods = () => {
  const { cards } = useGetCardList();

  const [selectedCard, setSelectedCard] = useState<null | string>(
    paymentMethods?.[0].cardNumber
  );

  return (
    <FlatList
      data={cards}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      style={detailsScreenStyles.paymentMethodsContainer}
      renderItem={({ item }) => {
        return (
          <>
            <PaymentMethodCard
              cardNumber={item.lastDigits}
              cardHolderName={item.userName}
              expiryDate={item.expiry}
            />
            <PaymentCardSelectionCheckbox
              cardNumber={item.cardNumber}
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
