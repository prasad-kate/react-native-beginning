import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "lightgray",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 0,
          borderTopWidth: 0,

          // for shadow on Android
          elevation: 120,

          // for shadow on ios
          shadowColor: "#000",
          shadowOpacity: 0.5,
          shadowRadius: 60,
          shadowOffset: { width: 0, height: 40 },
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size + 4} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" color={color} size={size + 1} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size + 3} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size + 5} />
          ),
        }}
      />
    </Tabs>
  );
}
