import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import Button from "@/components/ui/Button";
import { userRegistrationFormStyles } from "@/styles/registerUser.styles";
import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

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
    <View style={userRegistrationFormStyles.formContainer}>
      {/* form */}
      <View>
        <Text style={userRegistrationFormStyles.label}>Username</Text>
        <TextInput
          style={userRegistrationFormStyles.input}
          placeholder="Enter your username"
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
        />
      </View>

      <View>
        <Text style={userRegistrationFormStyles.label}>Email</Text>
        <TextInput
          style={userRegistrationFormStyles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
        />
      </View>

      <View>
        <Text style={userRegistrationFormStyles.label}>Password</Text>
        <TextInput
          style={userRegistrationFormStyles.input}
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry
        />
      </View>

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
            router.navigate("loginUser" as Href<string>);
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
  );
}
