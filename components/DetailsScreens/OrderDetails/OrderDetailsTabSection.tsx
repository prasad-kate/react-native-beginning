import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useState } from "react";
import { Dimensions, Text } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import OrderDetailsByStatus from "./OrderDetailsByStatus";

const OrderDetailsTabSection = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "first", title: "Delivered" },
    { key: "second", title: "Pending" },
    { key: "third", title: "Cancelled" },
  ];

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: () => <OrderDetailsByStatus orderStatus="delivered" />,
        second: () => <OrderDetailsByStatus orderStatus="pending" />,
        third: () => <OrderDetailsByStatus orderStatus="cancelled" />,
      })}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={(props) => {
        return (
          <TabBar
            {...props}
            renderLabel={({ route, focused }) => {
              return (
                <Text
                  style={[
                    detailsScreenStyles.label,
                    {
                      color: focused ? "black" : "#999999",
                    },
                  ]}
                >
                  {route.title}
                </Text>
              );
            }}
            indicatorStyle={detailsScreenStyles.indicator}
            style={detailsScreenStyles.tabBar}
            pressColor="transparent" // to disable ripple effect
          />
        );
      }}
    />
  );
};

export default OrderDetailsTabSection;
