import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { globalSearchStyles } from "@/styles/globalSearchStyles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function GlobalSearch() {
  const { isGlobalSearchVisible, toggleGlobalSearch, setGlobalSearch } =
    useGlobalSearchStore();
  const translateY = useSharedValue(-100);
  const [isMounted, setIsMounted] = useState(isGlobalSearchVisible);

  useEffect(() => {
    if (isGlobalSearchVisible) {
      setIsMounted(true);
      translateY.value = withTiming(0, { duration: 400 });
    } else {
      translateY.value = withTiming(-150, { duration: 400 }, () => {
        setIsMounted(false);
      });
    }
  }, [isGlobalSearchVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!isMounted) return null;

  return (
    <>
      <Animated.View style={[globalSearchStyles.container, animatedStyle]}>
        <View style={globalSearchStyles.searchBox}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={globalSearchStyles.input}
            placeholder="Search..."
            placeholderTextColor="gray"
            onChangeText={(text) => setGlobalSearch(text)}
          />
          <TouchableOpacity onPress={toggleGlobalSearch}>
            <Ionicons name="close" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}
