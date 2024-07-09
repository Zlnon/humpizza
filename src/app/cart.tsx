import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useCart } from "../../src/providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart;
  return (
    <View className="bg-white h-full ">
      <Text>length:{items.length}</Text>
    </View>
  );
};

export default CartScreen;
