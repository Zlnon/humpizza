import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "../../../../assets/data/products";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import Button from "../../../components/Button";
import { useCart } from "../../../providers/CartProvider";
import { PizzaSize } from "../../../types";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id={id}`} asChild>
              <Pressable className="text-light-tint">
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={28}
                    color={Colors.white}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

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
