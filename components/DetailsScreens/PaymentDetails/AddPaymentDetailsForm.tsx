import TextInput from "@/components/ui/TextInput";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useState } from "react";
import { View } from "react-native";

const AddPaymentDetailsForm = () => {
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    cardExpiry: "",
  });
  return (
    <View style={detailsScreenStyles.addPaymentDetailsForm}>
      <TextInput
        label="Carholder Name"
        placeholder="Enter your full name"
        value={formData.cardHolderName}
        onChangeText={(text) =>
          setFormData({ ...formData, cardHolderName: text })
        }
        variant="outlined"
      />
      <TextInput
        label="Card Number"
        placeholder="Enter your card number"
        value={formData.cardNumber}
        onChangeText={(text) => setFormData({ ...formData, cardNumber: text })}
        variant="outlined"
      />

      <View style={detailsScreenStyles.addPaymentDetailsCvAndExpiryContainer}>
        <TextInput
          label="CVV"
          placeholder="XXX"
          value={formData.cvv}
          onChangeText={(text) => setFormData({ ...formData, cvv: text })}
          variant="outlined"
          customInputContainerStyles={
            detailsScreenStyles.addPaymentDetailsCvAndExpiryInputContainer
          }
        />
        <TextInput
          label="Card Expiry"
          placeholder="XX/XX"
          value={formData.cardExpiry}
          onChangeText={(text) =>
            setFormData({ ...formData, cardExpiry: text })
          }
          customInputContainerStyles={
            detailsScreenStyles.addPaymentDetailsCvAndExpiryInputContainer
          }
          variant="outlined"
        />
      </View>
    </View>
  );
};

export default AddPaymentDetailsForm;
