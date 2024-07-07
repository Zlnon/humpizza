import { StyleSheet, View, Text, Image } from "react-native";
import products from "../../../assets/data/products";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListItem from "../../components/ProductListItem";

const product = products[7];
export default function MenuScreen() {
  return (
    <SafeAreaView className="h-full w-full justify-center  p-3 bg-white">
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[3]} />
    </SafeAreaView>
  );
}
