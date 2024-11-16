import BackButtonHeader from "@/components/BackButtonHeader";
import NotificationSettings from "@/components/Settings/NotificationSettings";
import PasswordSettings from "@/components/Settings/PasswordSettings";
import PersonalInfoSettings from "@/components/Settings/PersonalInfoSettings";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const Settings = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="settings" />
      <PersonalInfoSettings />
      <PasswordSettings />
      <NotificationSettings />
    </View>
  );
};

export default Settings;
