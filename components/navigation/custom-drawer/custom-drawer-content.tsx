import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import icons from "../../../constants/icons";

const CustomDrawerContent: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={{ flex: 1 }}>
      <View className="flex flex-1 px-3 py-1">
        {/* Close button */}
        <View className="justify-center items-start">
          <TouchableOpacity
            className="items-center justify-center"
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              className="h-8 w-8"
              style={{ tintColor: "white" }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
