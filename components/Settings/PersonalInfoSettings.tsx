import useUserStore from "@/store/userStore";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import SettingsTitle from "./SettingsTitle";

const PersonalInfoSettings = () => {
  const { userData } = useUserStore();
  return (
    <View>
      <View style={detailsScreenStyles.settingsTitleContainer}>
        <SettingsTitle title="Personal Information" />
        <TouchableOpacity activeOpacity={0.6}>
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={detailsScreenStyles.settingsDetailCard}>
        <Text style={detailsScreenStyles.settingsDetailsTitle}>Name</Text>
        <Text style={detailsScreenStyles.settingsDetailsValue}>
          {userData?.name}
        </Text>
      </View>

      <View style={detailsScreenStyles.settingsDetailCard}>
        <Text style={detailsScreenStyles.settingsDetailsTitle}>Email</Text>
        <Text style={detailsScreenStyles.settingsDetailsValue}>
          {userData?.email}
        </Text>
      </View>
    </View>
  );
};

export default PersonalInfoSettings;
