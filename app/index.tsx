import { Redirect, router } from "expo-router";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <GestureHandlerRootView className="w-screen">
        <ScrollView
          contentContainerStyle={{ height: "100%", justifyContent: "center" }}
        >
          <View className="w-full justify-content items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora.
            </Text>
            <View className="w-full">
              <CustomButton
                title="Continue with Email"
                handlePress={() => {
                  router.push("/sign-in");
                }}
                containerStyles="mt-7"
              />
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
