import useUserStore from "@/store/userStore";
import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { Image, Text, View } from "react-native";

const ProfileDetailsSection = () => {
  const { userData } = useUserStore();

  return (
    <View style={profileScreenStyles.profileDetailsContainer}>
      <Image
        source={require("@/assets/images/dummy-profile-pic.png")}
        style={profileScreenStyles.profileImage}
      />
      <View style={profileScreenStyles.profileDetailsTextContainer}>
        <Text style={profileScreenStyles.profileName}>{userData?.name}</Text>
        <Text style={profileScreenStyles.profileEmail}>{userData?.email}</Text>
      </View>
    </View>
  );
};

export default ProfileDetailsSection;
