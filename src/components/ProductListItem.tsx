import { View, Text, Image, Pressable } from "react-native";
import { Product } from "../types";

import React from "react";
import { Link } from "expo-router";
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className=" bg-white p-2  rounded-2xl  border-white flex-1 max-w-[50%]">
        <View className="justify-center items-center">
          <Image
            className="w-full h-32 aspect-w-1 aspect-h-1"
            source={{ uri: product.image || defaultPizzaImage }}
            resizeMode="contain"
          />
        </View>
        <View className=" justify-start items-start">
          <Text className=" items-start font-semibold text-xl text-light-text mt-1">
            {product.name}
          </Text>
          <Text className="font-bold  text-light-tint mb-1 mt-2">
            ${product.price}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
