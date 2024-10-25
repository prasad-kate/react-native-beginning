import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import Button from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
import { userRegistrationFormStyles } from "@/styles/registerUser.styles";
import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const LoginUserForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  // Handle form submission
  const handleSubmit = () => {
    const { email, password } = formData;

    if (!email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    // TODO: form submission with api integration
    Alert.alert("Form Submitted", `Email: ${email}`);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <View style={userRegistrationFormStyles.formContainer}>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
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
          // router.navigate("registerUser" as Href<string>);
          router.navigate("tabs/home" as Href<string>); // TODO: temporary navigation for testing
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
  );
};

export default LoginUserForm;
