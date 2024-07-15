import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Link, Stack } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="bg-gray-50 h-full justify-center p-5">
      <Stack.Screen options={{ title: "Sign in" }} />

      <Text className="text-gray-400">Email</Text>
      <TextInput
        value={email}
        className=" w-full bg-white border-2 border-gray-400  text-gray-400 rounded-lg p-2 mt-3"
        placeholder="name@email.com"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text className="text-gray-400 mt-4">Password</Text>
      <TextInput
        value={password}
        className=" w-full bg-white border-2 border-gray-400  text-gray-400 rounded-lg p-2 mt-3"
        placeholder=""
        secureTextEntry
        onChangeText={setPassword}
      />
      <View className="mt-5  w-full">
        <Button text=" Sign in" />

        <Link
          href={"/sign-up"}
          className=" text-base  text-light-tint mt-4 self-center"
        >
          Create an Account
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
