import { View, Text, Image } from "react-native";
import { Product } from "../types";

import React from "react";

const ProductListItem = ({ product }: Product) => {
  return (
    <View className="h-full w-full justify-center  p-3 bg-white">
      <View className="justify-center items-center">
        <Image
          className="w-full aspect-square mx-4 p-10 justify- items-center"
          source={{ uri: product.image }}
          resizeMode="contain"
        />
      </View>
      <View className=" justify-start items-start">
        <Text className=" items-start font-extrabold text-2xl text-light-text">
          {product.name}
        </Text>
        <Text className="font-extrabold text-2xl text-light-tint">
          ${product.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductListItem;
