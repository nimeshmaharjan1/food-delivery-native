import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import icons from '../../../constants/icons';
import dummyData from '../../../constants/dummy-data';

import CustomDrawerItem from './custom-drawer-item';
import Animated, { Adaptable } from 'react-native-reanimated';

const CustomDrawerContent: React.FC<{
    navigation: any;
}> = ({ navigation }) => {
    return (
        <DrawerContentScrollView scrollEnabled contentContainerStyle={{ flex: 1 }}>
            <View className="flex flex-1 px-3">
                {/* Close button */}
                <View className="justify-center items-start">
                    <TouchableOpacity className="items-center justify-center" onPress={() => navigation.closeDrawer()}>
                        <Image source={icons.cross} className="h-8 w-8" style={{ tintColor: 'white' }}></Image>
                    </TouchableOpacity>
                </View>
                {/* Profile */}
                <TouchableOpacity className="flex mt-3 flex-row items-center" onPress={() => console.log('profile')}>
                    <Image source={dummyData.myProfile.profile_image} className="w-12 h-12 rounded-xl"></Image>
                    <View className="ml-2">
                        <Text className="text-white text-lg font-bold tracking-wide">{dummyData.myProfile.name}</Text>
                        <Text className="text-white text-sm">View your profile</Text>
                    </View>
                </TouchableOpacity>
                {/* Drawer Items */}
                <View className="flex flex-1 mt-4">
                    <CustomDrawerItem icon={icons.home} label="Home" />
                    <CustomDrawerItem icon={icons.cart} label="Cart" />
                    <CustomDrawerItem icon={icons.notification} label="Notification" />
                    <CustomDrawerItem icon={icons.wallet} label="My Wallet" />
                    {/* Line Divider */}
                    <View className="h-[1.2px] my-3 ml-3 bg-lightGray1"></View>
                    <CustomDrawerItem icon={icons.favourite} label="Favourites" />
                    <CustomDrawerItem icon={icons.location} label="Track your order" />
                    <CustomDrawerItem icon={icons.setting} label="Settings" />
                    <CustomDrawerItem icon={icons.help} label="Help Center" />
                </View>
                {/* Logout */}
                <View className="mb-3">
                    <CustomDrawerItem icon={icons.logout} label="Logout" />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
