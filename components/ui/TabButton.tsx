import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { tabStyles } from "@/styles/global.styles";
import { TabButtonProps } from "@/types";
import { Pressable, View } from "react-native";

function TabButton({ onPress, children, ...props }: TabButtonProps) {
  const { closeGlobalSearch } = useGlobalSearchStore();
  return (
    <Pressable
      onPress={(event) => {
        closeGlobalSearch();
        if (onPress) {
          onPress(event); // Ensure navigation happens
        }
      }}
      {...props}
    >
      <View style={tabStyles.container}>{children}</View>
    </Pressable>
  );
}

export default TabButton;
