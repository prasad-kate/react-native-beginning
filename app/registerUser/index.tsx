import AuthPageLogo from "@/components/AuthPageLogo";
import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import { registerUserStyles } from "@/styles/registerUser.styles";
import { Text, View } from "react-native";
import UserRegistrationForm from "./components/RegistrationForm";

const RegisterUser = () => {
  return (
    <View style={registerUserStyles.container}>
      <AuthPageLogo />
      <Text style={boardingStyles.textMakePart} numberOfLines={1}>
        Welcome
      </Text>
      <UserRegistrationForm />
    </View>
  );
};

export default RegisterUser;
