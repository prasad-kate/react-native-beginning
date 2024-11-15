import Dropdown from "@/components/ui/Dropdown";
import TextInput from "@/components/ui/TextInput";
import { countryList } from "@/constants/shippingScreenConstants";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useState } from "react";
import { View } from "react-native";

const AddShippingDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    pincode: "",
    country: "",
    district: "",
    city: "",
  });
  return (
    <View style={detailsScreenStyles.addShippingDetailsForm}>
      <TextInput
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.fullname}
        onChangeText={(text) => setFormData({ ...formData, fullname: text })}
        variant="outlined"
      />
      <TextInput
        label="Address"
        placeholder="Enter your address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
        variant="outlined"
      />
      <TextInput
        label="Pincode"
        placeholder="Enter your pincode"
        value={formData.pincode}
        onChangeText={(text) => setFormData({ ...formData, pincode: text })}
        variant="standard"
        keyboardType="number-pad"
      />
      <Dropdown label="Country" options={countryList} variant="outlined" />
    </View>
  );
};

export default AddShippingDetailsForm;
