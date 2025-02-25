import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { notificationScreenStyles } from "@/styles/notificationScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const NotificationsHeader = () => {
  const { toggleGlobalSearch } = useGlobalSearchStore();

  return (
    <View style={notificationScreenStyles.headerContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          toggleGlobalSearch();
        }}
      >
        <Ionicons name="search" size={26} color="gray" />
      </TouchableOpacity>
      <Text style={notificationScreenStyles.headerText} numberOfLines={1}>
        Notifications
      </Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Ionicons name="trash" size={21} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default NotificationsHeader;
