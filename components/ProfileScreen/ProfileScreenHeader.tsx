import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const ProfileScreenHeader = () => {
  return (
    <View style={profileScreenStyles.headerContainer}>
      <Ionicons name="search" size={26} color="gray" />
      <Text style={profileScreenStyles.headerText}>Profile</Text>
      <Ionicons name="log-out" size={26} color="gray" />
    </View>
  );
};

export default ProfileScreenHeader;
