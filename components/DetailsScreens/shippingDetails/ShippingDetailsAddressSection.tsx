import { shippingAddresses } from "@/constants/shippingScreenConstants";
import { useState } from "react";
import { FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";

const ShippingDetailsAddressSection = () => {
  const [selectedAddress, setSelectedAddress] = useState<null | number>(0);
  return (
    <FlatList
      data={shippingAddresses}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => {
        const { name, address } = item;
        return (
          <>
            <ShippingDetailsCard
              name={name}
              address={address}
              addressId={index}
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
