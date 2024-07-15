import { View, Text, Pressable } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Order } from "../types";
import { Link, useSegments } from "expo-router";
dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable className="bg-white p-2 border rounded-lg flex-row justify-between items-center">
        <View>
          <Text className="font-bold my-2">Order#{order.id}</Text>
          <Text className="text-gray-400">
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>
        <Text className="font-medium">{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrderListItem;
