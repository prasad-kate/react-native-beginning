import { useGetUserAdresses } from "@/services/address.service";
import { useState } from "react";
import { FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";

const ShippingDetailsAddressSection = () => {
  const { userAddresses } = useGetUserAdresses();
  const [selectedAddress, setSelectedAddress] = useState<null | number>(0);

  return (
    <FlatList
      data={userAddresses}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => {
        return (
          <ShippingDetailsCard
            index={index}
            addressDetails={item}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ShippingDetailsAddressSection;
