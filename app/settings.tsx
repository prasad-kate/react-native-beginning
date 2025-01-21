import BackButtonHeader from "@/components/BackButtonHeader";
import NotificationSettings from "@/components/Settings/NotificationSettings";
import PersonalInfoSettings from "@/components/Settings/PersonalInfoSettings";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const Settings = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="settings" />
      <PersonalInfoSettings />
      <NotificationSettings />
    </View>
  );
};

export default Settings;
