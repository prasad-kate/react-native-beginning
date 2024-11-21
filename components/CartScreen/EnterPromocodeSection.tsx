import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import TextInput from "../ui/TextInput";

const EnterPromocodeSection = () => {
  const methods = useForm({
    defaultValues: {
      promoCode: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <View style={cartScreenStyles.promoCodeInputAndButtonContainer}>
        <View style={cartScreenStyles.promoCodeInputContainer}>
          <TextInput
            name="promoCode"
            placeholder="Enter your promo code"
            customInputStyles={cartScreenStyles.promoCodeInputStyles}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={cartScreenStyles.promoCodeSubmitButton}
          onPress={() => {
            // TDDO: add logic and this test code removal
            alert(JSON.stringify(methods.getValues()));
            methods.setValue("promoCode", "");
          }}
        >
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </FormProvider>
  );
};

export default EnterPromocodeSection;
