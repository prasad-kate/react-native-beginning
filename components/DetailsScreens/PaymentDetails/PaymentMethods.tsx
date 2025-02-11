import { useGetCardList } from "@/services/payment.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { CardDetails } from "@/types";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import PaymentCardSelectionCheckbox from "./PaymentCardSelectionCheckbox";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentMethods = () => {
  const { cards } = useGetCardList();

  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  useEffect(() => {
    const activeCard = cards?.findIndex((item: CardDetails) => !!item.isActive);
    if (activeCard) {
      setSelectedCard(activeCard);
    }
  }, [cards]);

  return (
    <FlatList
      data={cards}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      style={detailsScreenStyles.paymentMethodsContainer}
      renderItem={({ item, index }) => {
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
              index={index}
            />
          </>
        );
      }}
    />
  );
};

export default PaymentMethods;
