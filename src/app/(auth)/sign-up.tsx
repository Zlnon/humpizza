import { View, Text, TextInput } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { Link, Stack } from "expo-router";

const SignUp = () => {
  return (
    <View className="bg-gray-50 h-full justify-center p-5">
      <Stack.Screen options={{ title: "Sign Up" }} />
      <Text className="text-gray-400">Email</Text>
      <TextInput
        className=" w-full bg-white border-2 border-gray-400  text-gray-400 rounded-lg p-2 mt-3"
        placeholder="name@email.com"
        keyboardType="email-address"
      />
      <Text className="text-gray-400 mt-4">Password</Text>
      <TextInput
        className=" w-full bg-white border-2 border-gray-400  text-gray-400 rounded-lg p-2 mt-3"
        placeholder=""
        secureTextEntry
      />
      <View className="mt-5  w-full">
        <Button text=" Create Account " />

        <Link
          href={"/sign-in"}
          className=" text-base  text-light-tint mt-4 self-center"
        >
          {" "}
          already a member sign in
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
