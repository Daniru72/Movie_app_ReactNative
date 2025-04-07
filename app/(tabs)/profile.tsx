import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

function Profile() {
  return (
    <View className="bg-primary flex-1  items-center">
      <Image source={images.bg} className="absolute w-full z-0" />

      
    </View>
  );
}

export default Profile;
