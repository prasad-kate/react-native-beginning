import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import { useAddCard } from "@/services/payment.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

const AddPaymentDetailsForm = () => {
  const methods = useForm({
    defaultValues: {
      userName: "",
      lastDigits: "",
      expiry: "",
    },
  });

  const { addCard, isAddingCard } = useAddCard();

  return (
    <FormProvider {...methods}>
      <View style={detailsScreenStyles.addPaymentDetailsForm}>
        <View>
          <TextInput
            name="userName"
            label="Carholder Name"
            placeholder="Enter your full name"
            variant="outlined"
          />
          <TextInput
            name="lastDigits"
            label="Card Number"
            placeholder="Enter your card number"
            variant="outlined"
          />

          <View
            style={detailsScreenStyles.addPaymentDetailsCvAndExpiryContainer}
          >
            <TextInput
              name="expiry"
              label="Card Expiry"
              placeholder="XX/XX"
              customInputContainerStyles={
                detailsScreenStyles.addPaymentDetailsCvAndExpiryInputContainer
              }
              variant="outlined"
            />
          </View>
        </View>
        <Button
          text="Add New Card"
          style={[
            detailsScreenStyles.saveCardDetailsButton,
            {
              opacity: isAddingCard ? 0.5 : 1,
            },
          ]}
          disabled={isAddingCard}
          onPress={() => {
            const values = methods.getValues();
            addCard(values);
          }}
        />
      </View>
    </FormProvider>
  );
};

export default AddPaymentDetailsForm;
