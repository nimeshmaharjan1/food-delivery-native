import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainLayout from "../../layout/main-layout";
import CustomDrawerContent from "./custom-drawer-content";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View className="flex flex-1 bg-primary">
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => <CustomDrawerContent navigation={props.navigation}></CustomDrawerContent>}
      >
        <Drawer.Screen name="MainLayout">{() => <MainLayout></MainLayout>}</Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
