import Button from "@/components/ui/Button";
import { userRegistrationFormStyles } from "@/styles/registerUser.styles";
import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form submission
  const handleSubmit = () => {
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    // Perform form submission logic (e.g., send data to backend)
    Alert.alert("Form Submitted", `Username: ${username}, Email: ${email}`);
  };

  return (
    <View style={userRegistrationFormStyles.container}>
      <Text style={userRegistrationFormStyles.label}>Username:</Text>
      <TextInput
        style={userRegistrationFormStyles.input}
        placeholder="Enter your username"
        value={formData.username}
        onChangeText={(text) => setFormData({ ...formData, username: text })}
      />

      <Text style={userRegistrationFormStyles.label}>Email:</Text>
      <TextInput
        style={userRegistrationFormStyles.input}
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />

      <Text style={userRegistrationFormStyles.label}>Password:</Text>
      <TextInput
        style={userRegistrationFormStyles.input}
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
      />

      <Button text="Submit" onPress={handleSubmit} />
    </View>
  );
}
