import { useEffect, useRef } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";

const SkeletonLoader = ({ style }: { style?: ViewStyle }) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shimmerLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    shimmerLoop.start();

    return () => shimmerLoop.stop();
  }, [shimmerAnim]);

  const shimmerOpacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });

  return (
    <Animated.View
      style={[styles.skeleton, { opacity: shimmerOpacity }, style]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
});

export default SkeletonLoader;
