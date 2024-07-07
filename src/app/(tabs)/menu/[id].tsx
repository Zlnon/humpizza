import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const productItemDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="bg-white h-full">
      <Stack.Screen options={{ title: "Details:" + id }} />
      <Text className="text-2xl">productItemDetails{id}</Text>
    </View>
  );
};

export default productItemDetails;
