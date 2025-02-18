import {
  useGetCardList,
  useUpdateCardStatus,
} from "@/services/payment.service";
import useUserStore from "@/store/userStore";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { CardDetails } from "@/types";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import PaymentCardSelectionCheckbox from "./PaymentCardSelectionCheckbox";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentMethods = () => {
  const { cards, isGettingCardDetails } = useGetCardList();

  const [selectedCard, setSelectedCard] = useState<null | string>(null);

  const { updateCardStatus } = useUpdateCardStatus();
  const { userData } = useUserStore();

  const handleSelection = (cardId: string) => {
    setSelectedCard(cardId);
    updateCardStatus({
      cardId,
      userId: userData?.user_id!,
    });
  };

  useEffect(() => {
    const activeCard = cards?.findIndex(
      (item: CardDetails) => !!item?.isActive
    );
    if (activeCard !== -1) {
      setSelectedCard(cards[activeCard]?.card_id);
    }
  }, [cards]);

  return isGettingCardDetails ? (
    <ActivityIndicator size={"large"} />
  ) : (
    <FlatList
      data={cards}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ card_id }) => card_id}
      style={detailsScreenStyles.paymentMethodsContainer}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            activeOpacity={selectedCard === item.card_id ? 1 : 0.9}
            onPress={() => setSelectedCard(item.card_id)}
          >
            <PaymentMethodCard
              cardNumber={item.lastDigits}
              cardHolderName={item.userName}
              expiryDate={item.expiry}
              cardId={item.card_id}
              selectedCard={selectedCard}
            />
            <PaymentCardSelectionCheckbox
              cardId={item.card_id}
              selectedCard={selectedCard}
              handleSelection={handleSelection}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PaymentMethods;
