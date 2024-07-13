import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "../../../../assets/data/products";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import Button from "../../../components/Button";
import { useCart } from "../../../providers/CartProvider";
import { PizzaSize } from "../../../types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const productItemDetails = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };
  if (!product) {
    return <Text> product not found</Text>;
  }

  return (
    <View className="bg-white h-full flex-1 p-2">
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
        className="w-[100%] aspect-square"
      />

      <Text className="text-2xl font-bold mt-auto">${product.price}</Text>
    </View>
  );
};

export default productItemDetails;
