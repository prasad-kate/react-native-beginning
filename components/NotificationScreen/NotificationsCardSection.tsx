import { NotificationsDetails } from "@/types";
import { FlatList } from "react-native";
import NotificationCard from "./NotificationCard";

const NotificationsCardSection = ({
  notificationsList,
}: {
  notificationsList: NotificationsDetails[];
}) => {
  return (
    <FlatList
      data={notificationsList}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <NotificationCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotificationsCardSection;
