import { useGetUserAdresses } from "@/services/address.service";
import { Address } from "@/types";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";

const ShippingDetailsAddressSection = () => {
  const { userAddresses } = useGetUserAdresses();

  const [selectedAddress, setSelectedAddress] = useState<null | number>(null);

  useEffect(() => {
    const activeAddress = userAddresses?.findIndex(
      (item: Address) => !!item.isActive
    );
    if (activeAddress) {
      setSelectedAddress(activeAddress);
    }
  }, [userAddresses]);

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
