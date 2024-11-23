import useAuthStore from "@/store/authStore";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { TouchableWithoutFeedback, View } from "react-native";

export default function TabsLayout() {
  const { authToken } = useAuthStore();

  if (!authToken) {
    return <Redirect href={"/registerUser"} />;
  }

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
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
          tabBarButton: (props) => (
            <TabButton
              style={{
                backgroundColor: "red",
              }}
              {...props}
            >
              {props.children}
            </TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" color={color} size={size} />
          ),
          tabBarButton: (props) => (
            <TabButton {...props}>{props.children}</TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notification",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
          tabBarButton: (props) => (
            <TabButton {...props}>{props.children}</TabButton>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarButton: (props) => (
            <TabButton {...props}>{props.children}</TabButton>
          ),
        }}
      />
    </Tabs>
  );
}

function TabButton({ ...props }) {
  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
}
