import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import TextInput from "@/components/ui/TextInput";
import {
  cityList,
  countryList,
  stateList,
} from "@/constants/shippingScreenConstants";
import { useCreateNewAddress } from "@/services/address.service";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";

const AddShippingDetailsForm = () => {
  const methods = useForm({
    defaultValues: {
      address: "",
      pincode: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const { createAddress } = useCreateNewAddress();

  const handleSubmit = () => {
    const values = methods.getValues();

    const allValuesAvaialable = Object.values(values).every((value) => !!value);

    if (!allValuesAvaialable) {
      return;
    }

    createAddress(values);
  };

  return (
    <FormProvider {...methods}>
      <View style={detailsScreenStyles.addShippingDetailsFormContainer}>
        <View>
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
          <Dropdown
            name="country"
            label="Country"
            options={countryList}
            variant="outlined"
          />
          <Dropdown
            name="state"
            label="State"
            options={stateList}
            variant="outlined"
          />
          <Dropdown
            name="city"
            label="City"
            options={cityList}
            variant="outlined"
          />
        </View>
        <Button
          text="Save Address"
          style={cartScreenStyles.cartCheckoutButton}
          onPress={handleSubmit}
        />
      </View>
    </FormProvider>
  );
};

export default AddShippingDetailsForm;
