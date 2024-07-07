import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import products from "../../../../assets/data/products";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListItem from "../../../components/ProductListItem";

export default function MenuScreen() {
  return (
    <View className="flex h-full w-full justify-center  p-3 bg-gray-100">
      <FlatList
        className="flex"
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
