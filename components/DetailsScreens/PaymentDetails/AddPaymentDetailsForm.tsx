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

  const handleExpiryChange = (
    text: string,
    onChange: (formatted: string) => void
  ) => {
    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 4) {
      cleaned = cleaned.slice(0, 4);
    }

    if (cleaned.length < 2) {
      onChange(cleaned);
      return;
    }

    if (cleaned.length === 2) {
      if (text.includes("/")) {
        onChange(cleaned);
      } else {
        onChange(`${cleaned}/`);
      }
      return;
    }

    const left = cleaned.slice(0, 2);
    const right = cleaned.slice(2);

    onChange(`${left}/${right}`);
  };

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
              onChangeText={(text) =>
                handleExpiryChange(text, (formatted) =>
                  methods.setValue("expiry", formatted)
                )
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
