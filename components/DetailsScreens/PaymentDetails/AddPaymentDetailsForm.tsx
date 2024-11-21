import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

const AddPaymentDetailsForm = () => {
  const methods = useForm({
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      cvv: "",
      cardExpiry: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <View style={detailsScreenStyles.addPaymentDetailsForm}>
        <View>
          <TextInput
            name="cardHolderName"
            label="Carholder Name"
            placeholder="Enter your full name"
            variant="outlined"
          />
          <TextInput
            name="cardNumber"
            label="Card Number"
            placeholder="Enter your card number"
            variant="outlined"
          />

          <View
            style={detailsScreenStyles.addPaymentDetailsCvAndExpiryContainer}
          >
            <TextInput
              name="cvv"
              label="CVV"
              placeholder="XXX"
              variant="outlined"
              customInputContainerStyles={
                detailsScreenStyles.addPaymentDetailsCvAndExpiryInputContainer
              }
            />
            <TextInput
              name="cardExpiry"
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
          style={detailsScreenStyles.saveCardDetailsButton}
          onPress={() => {
            alert(JSON.stringify(methods.getValues()));
          }}
        />
      </View>
    </FormProvider>
  );
};

export default AddPaymentDetailsForm;
