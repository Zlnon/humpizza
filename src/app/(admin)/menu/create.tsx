import { View, Text, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/Button";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;
  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("price is  not a number");
      return false;
    }
    return true;
  };

  const onDelete = () => {
    console.warn("Delete!!");
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product ?", [
      { text: "Cancel" },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
  };

  const onSubmit = () => {
    if (isUpdating) {
    } else {
      onCreate();
    }
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("creating product");

    resetFields();
  };
  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("creating product");

    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="flex justify-center p-3 bg-slate-50 h-full">
      <Stack.Screen
        options={{ title: isUpdating ? "Update product" : "Create Product" }}
      />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        className="w-[50%] aspect-square self-center "
      />

      <Text
        className="self-center font-bold text-light-tint my-3 "
        onPress={pickImage}
      >
        Select Image
      </Text>
      <Text className="text-base text-gray-500">Name</Text>

      <TextInput
        placeholder="Name"
        className="bg-white p-3 rounded-md mt-2 mb-5"
        value={name}
        onChangeText={setName}
      />
      <Text className="text-base text-gray-500">Price</Text>
      <TextInput
        placeholder="Price"
        className="bg-white p-3 rounded-md mt-2 mb-5"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text className="text-base text-red-500">{errors}</Text>
      <Button onPress={onCreate} text={isUpdating ? "Update" : "Create"} />
      {isUpdating && (
        <Text
          className="text-base font-bold text-red-500 self-center mt-2"
          onPress={confirmDelete}
        >
          Delete
        </Text>
      )}
    </View>
  );
};

export default CreateProductScreen;
