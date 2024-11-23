import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import Button from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
import { userRegistrationFormStyles } from "@/styles/registerUser.styles";
import { useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function UserRegistrationForm() {
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  // Handle form submission
  const handleSubmit = () => {
    const { username, email, password } = methods.getValues();

    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    // TODO: form submission with api integration
    Alert.alert("Form Submitted", `Username: ${username}, Email: ${email}`);
  };

  return (
    <FormProvider {...methods}>
      <View style={userRegistrationFormStyles.formContainer}>
        {/* form */}
        <TextInput
          name="username"
          label="Username"
          placeholder="Enter your username"
        />

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
          text="Submit"
          onPress={handleSubmit}
          style={userRegistrationFormStyles.submitButton}
        />

        {/* already have account section */}
        <View style={boardingStyles.welcomeTextContainer}>
          <Text
            style={[
              boardingStyles.textMakePart,
              {
                fontSize: 12,
              },
            ]}
            numberOfLines={1}
          >
            Already have account?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              router.navigate("/loginUser");
            }}
          >
            <Text
              style={[
                boardingStyles.textBeautiful,
                {
                  fontSize: 18,
                  letterSpacing: 1,
                },
              ]}
            >
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </FormProvider>
  );
}
