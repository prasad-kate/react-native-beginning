import AuthPageLogo from "@/components/AuthPageLogo";
import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import useAuthStore from "@/store/authStore";
import { registerUserStyles } from "@/styles/registerUser.styles";
import { Redirect } from "expo-router";
import { ScrollView, Text } from "react-native";
import UserRegistrationForm from "./components/RegistrationForm";

const RegisterUser = () => {
  const { authToken } = useAuthStore();

  if (authToken) {
    return <Redirect href={"/tabs/home"} />;
  }

  return (
    <ScrollView
      style={registerUserStyles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <AuthPageLogo />
      <Text
        style={[
          boardingStyles.textMakePart,
          {
            marginBottom: 10,
          },
        ]}
        numberOfLines={1}
      >
        Welcome
      </Text>

      <UserRegistrationForm />
    </ScrollView>
  );
};

export default RegisterUser;
