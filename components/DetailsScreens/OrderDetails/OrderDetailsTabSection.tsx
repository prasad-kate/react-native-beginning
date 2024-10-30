import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const OrderDetailsTabSection = () => {
  const [index, setIndex] = useState(0);

  // Define individual tab content components
  const FirstRoute = () => (
    <View style={{ flex: 1 }}>
      <Text>First Tab Content</Text>
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1 }}>
      <Text>Second Tab Content</Text>
    </View>
  );
  const ThirdRoute = () => (
    <View style={{ flex: 1 }}>
      <Text>Second Tab Content</Text>
    </View>
  );

  const routes = [
    { key: "first", title: "Delivered" },
    { key: "second", title: "Processing" },
    { key: "third", title: "Cancelled" },
  ];

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
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
