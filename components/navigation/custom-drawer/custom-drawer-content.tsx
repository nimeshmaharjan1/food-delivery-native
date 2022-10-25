import { View, Text, SafeAreaView, TouchableOpacity, Image, Pressable } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import icons from '../../../constants/icons';
import dummyData from '../../../constants/dummy-data';

import CustomDrawerItem from './custom-drawer-item';
import Animated, { Adaptable } from 'react-native-reanimated';
import { useAppDispatch } from '../../../store';
import { getSelectedTab, setSelectedDrawerTab } from '../../../store/modules/drawer';
import { useSelector } from 'react-redux';

const CustomDrawerContent: React.FC<{
    navigation: any;
}> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const drawerItemsTop = [
        { label: 'Home', icon: icons.home },
        { label: 'Cart', icon: icons.cart },
        { label: 'Notification', icon: icons.notification },
        { label: 'My Wallet', icon: icons.wallet },
    ];
    const drawerItemsBot = [
        { label: 'Favourites', icon: icons.favourite },
        { label: 'Track your order', icon: icons.location },
        { label: 'Settings', icon: icons.setting },
        { label: 'Help Center', icon: icons.help },
    ];
    const selectDrawerTab = (tab: string) => {
        dispatch(setSelectedDrawerTab(tab));
        navigation.navigate('MainLayout');
    };
    const selectedTab = useSelector(getSelectedTab);
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
                    {drawerItemsTop.map((item) => (
                        <CustomDrawerItem
                            icon={item.icon}
                            label={item.label}
                            isFocused={selectedTab === item.label ? true : false}
                            onPress={() => selectDrawerTab(item.label)}
                            key={item.label}
                        ></CustomDrawerItem>
                    ))}
                    {/* Line Divider */}
                    <View className="h-[1.2px] my-3 ml-3 bg-lightGray1"></View>
                    {drawerItemsBot.map((item) => (
                        <CustomDrawerItem
                            icon={item.icon}
                            label={item.label}
                            isFocused={selectedTab === item.label ? true : false}
                            onPress={() => selectDrawerTab(item.label)}
                            key={item.label}
                        ></CustomDrawerItem>
                    ))}
                </View>
                {/* Logout */}
                <View className="mb-3">
                    <CustomDrawerItem onPress={() => selectDrawerTab('Logout')} icon={icons.logout} label="Logout" isFocused={false} />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
