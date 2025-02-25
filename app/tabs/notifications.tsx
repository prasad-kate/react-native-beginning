import GlobalSearch from "@/components/GlobalSearch";
import EmptyNotifications from "@/components/NotificationScreen/EmptyNotification";
import NotificationsCardSection from "@/components/NotificationScreen/NotificationsCardSection";
import NotificationsHeader from "@/components/NotificationScreen/NotificationsHeader";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { NotificationsDetails } from "@/types";
import { View } from "react-native";

const NotificationsScreen = () => {
  // TODO: make this list dynamic
  const notificationsList: NotificationsDetails | [] = [];
  return (
    <View style={homeScreenStyles.container}>
      <NotificationsHeader />
      {notificationsList?.length ? (
        <NotificationsCardSection notificationsList={notificationsList} />
      ) : (
        <EmptyNotifications />
      )}
      <GlobalSearch />
    </View>
  );
};

export default NotificationsScreen;
