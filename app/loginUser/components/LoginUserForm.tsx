import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import Button from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
import { useLogin } from "@/services/auth.service";
import { userRegistrationFormStyles } from "@/styles/registerUser.styles";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const LoginUserForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { login } = useLogin();

  // Handle form submission
  const handleSubmit = () => {
    const { email, password } = methods.getValues();

    if (!email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    login({
      email,
      password,
    });
  };

  return (
    <FormProvider {...methods}>
      <View style={userRegistrationFormStyles.formContainer}>
        <TextInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <PasswordInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        {/* submission */}
        <Button
          text="LOGIN"
          onPress={handleSubmit}
          style={userRegistrationFormStyles.submitButton}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            router.push("/registerUser");
          }}
        >
          <Text
            style={[
              boardingStyles.textBeautiful,
              {
                fontSize: 18,
                letterSpacing: 1,
                textAlign: "center",
              },
            ]}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </FormProvider>
  );
};

export default LoginUserForm;
