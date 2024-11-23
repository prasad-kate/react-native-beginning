import useAuthStore from "@/store/authStore";
import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Text, View } from "react-native";

const ProfileScreenHeader = () => {
  const { clearAuthToken } = useAuthStore();

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logut",
      "Do you want to logout?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => clearAuthToken(),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={profileScreenStyles.headerContainer}>
      <Ionicons name="search" size={26} color="gray" />
      <Text style={profileScreenStyles.headerText}>Profile</Text>
      <Ionicons name="log-out" size={26} color="gray" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreenHeader;
