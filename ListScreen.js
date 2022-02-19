import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Anand1" },
    { name: "Anand2" },
    { name: "Anand3" },
    { name: "Anand4" },
    { name: "Anand5" },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
});
export default ListScreen;
