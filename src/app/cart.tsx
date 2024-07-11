import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { useCart } from "../../src/providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="bg-white h-full p-3 ">
      <FlatList
        // className="gap-3"
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text>Total : ${total}</Text>
      <Button text="Checkout" />
    </View>
  );
};

export default CartScreen;
