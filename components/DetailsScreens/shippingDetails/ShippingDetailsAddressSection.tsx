import { useGetUserAdresses } from "@/services/address.service";
import { Address } from "@/types";
import { useLayoutEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import ShippingDetailsCard from "./ShippingDetailsCard";

const ShippingDetailsAddressSection = () => {
  const { userAddresses, isGettingUserAddresses } = useGetUserAdresses();
  const [selectedAddress, setSelectedAddress] = useState<null | number>(null);

  useLayoutEffect(() => {
    const activeAddress = userAddresses?.findIndex(
      (item: Address) => item.isActive
    );

    if (activeAddress !== -1) {
      setSelectedAddress(userAddresses[activeAddress]?.address_id);
    }
  }, [userAddresses]);

  return isGettingUserAddresses ? (
    <ActivityIndicator size={"large"} />
  ) : (
    <FlatList
      data={userAddresses}
      keyExtractor={({ address_id }) => address_id}
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
