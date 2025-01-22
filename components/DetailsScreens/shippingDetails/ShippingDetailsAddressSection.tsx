import { shippingAddresses } from "@/constants/shippingScreenConstants";
import React, { useState } from "react";
import { FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";
import ShippingAddressCheckbox from "./ShippingDetailsCheckbox";

const ShippingDetailsAddressSection = () => {
  const [selectedAddress, setSelectedAddress] = useState<null | string>("0");
  return (
    <FlatList
      data={shippingAddresses}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => {
        const { name, address } = item;
        return (
          <>
            <ShippingDetailsCard name={name} address={address} />
            <ShippingAddressCheckbox
              addressId={`${index}`}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          </>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ShippingDetailsAddressSection;
