import useAuthStore from "@/store/authStore";
import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";

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
      <Text style={profileScreenStyles.headerText}>Profile</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={profileScreenStyles.logoutButtonContainer}
        onPress={handleLogout}
      >
        <Ionicons name="log-out" size={26} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreenHeader;
