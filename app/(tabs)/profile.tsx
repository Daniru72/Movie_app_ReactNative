import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

function Profile() {
  // State for input fields
  const [firstName, setFirstName] = useState("Daniru");
  const [lastName, setLastName] = useState("Dahamneth");
  const [email, setEmail] = useState("danirudahamneth72@gmail.com");
  const [mobile, setMobile] = useState("0710523060");

  return (
    <View className="bg-primary flex-1">
      {/* Background Image */}
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 20 }}
      >
        {/* User Avatar */}
        <View className="items-center mt-10">
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual avatar URL
            className="w-32 h-32 rounded-full bg-slate-100"
          />
          <Text className="text-white text-2xl font-bold mt-5">{`${firstName} ${lastName}`}</Text>
          <Text className="text-light-200 text-sm mt-2">{email}</Text>
        </View>

        {/* Input Fields */}
        <View className="mt-10">
          <Text className="text-white text-lg font-bold mb-2">First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter First Name"
            placeholderTextColor="#aaa"
            className="bg-dark-100 text-white p-3 rounded-lg mb-4"
          />

          <Text className="text-white text-lg font-bold mb-2">Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter Last Name"
            placeholderTextColor="#aaa"
            className="bg-dark-100 text-white p-3 rounded-lg mb-4"
          />

          <Text className="text-white text-lg font-bold mb-2">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            className="bg-dark-100 text-white p-3 rounded-lg mb-4"
          />

          <Text className="text-white text-lg font-bold mb-2">Mobile</Text>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            placeholder="Enter Mobile Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            className="bg-dark-100 text-white p-3 rounded-lg mb-4"
          />
        </View>

        {/* Action Buttons */}
        <View className="mt-10">
          <TouchableOpacity className="bg-accent py-3 rounded-lg mb-4">
            <Text className="text-white text-center text-base font-semibold">
              Save Changes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-500 py-3 rounded-lg">
            <Text className="text-white text-center text-base font-semibold">
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;