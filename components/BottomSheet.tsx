import { bottomSheetStyles } from "@/styles/bottomSheet.styles";
import { BottomSheetProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

const BottomSheet = ({ isVisible, onClose, children }: BottomSheetProps) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const modalPosition = useRef(new Animated.Value(1)).current;

  const { height: screenHeight } = Dimensions.get("window");

  useEffect(() => {
    if (isVisible) {
      setIsModalVisible(true);
      // Open animation
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(modalPosition, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Close animation
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(modalPosition, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsModalVisible(false);
        if (onClose) onClose();
      });
    }
  }, [isVisible, overlayOpacity, modalPosition, onClose]);

  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <Pressable
        style={StyleSheet.absoluteFillObject} // Ensure Pressable covers the entire screen
        onPress={onClose}
      >
        <Animated.View
          style={[
            bottomSheetStyles.overlay,
            {
              opacity: overlayOpacity,
            },
          ]}
        />
      </Pressable>

      {/* Modal Content */}
      <Animated.View
        style={[
          bottomSheetStyles.modalContent,
          {
            height: screenHeight * 0.75,
            transform: [
              {
                translateY: modalPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, screenHeight],
                }),
              },
            ],
          },
        ]}
      >
        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={bottomSheetStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;
