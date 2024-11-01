import { shippingAddresses } from "@/constants/shippingScreenConstants";
import React from "react";
import { FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";

const ShippingDetailsAddressSection = () => {
  return (
    <FlatList
      data={shippingAddresses}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        const { name, address } = item;
        return <ShippingDetailsCard name={name} address={address} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ShippingDetailsAddressSection;
