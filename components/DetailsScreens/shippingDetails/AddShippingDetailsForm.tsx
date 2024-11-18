import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import TextInput from "@/components/ui/TextInput";
import { countryList } from "@/constants/shippingScreenConstants";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

const AddShippingDetailsForm = () => {
  const methods = useForm({
    defaultValues: {
      fullname: "",
      address: "",
      pincode: "",
      country: "",
      district: "",
      city: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <View style={detailsScreenStyles.addShippingDetailsFormContainer}>
        <View>
          <TextInput
            name="fullname"
            label="Full Name"
            placeholder="Enter your full name"
            variant="outlined"
          />
          <TextInput
            name="address"
            label="Address"
            placeholder="Enter your address"
            variant="outlined"
          />
          <TextInput
            name="pincode"
            label="Pincode"
            placeholder="Enter your pincode"
            variant="outlined"
            keyboardType="number-pad"
          />
          <Dropdown label="Country" options={countryList} variant="outlined" />
          <Dropdown label="District" options={countryList} variant="outlined" />
          <Dropdown label="City" options={countryList} variant="outlined" />
        </View>
        <Button
          text="Save Address"
          style={cartScreenStyles.cartCheckoutButton}
          onPress={() => {
            alert(JSON.stringify(methods.getValues()));
          }}
        />
      </View>
    </FormProvider>
  );
};

export default AddShippingDetailsForm;
