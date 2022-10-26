import { View, Text, Image } from 'react-native';
import React from 'react';
import { styled, useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Adaptable, AnimateStyle, Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Header from './header';
import { useSelector } from 'react-redux';
import { getSelectedTab } from '../../../store/modules/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '../../../constants/icons';
import dummyData from '../../../constants/dummy-data';
import { StatusBar } from 'expo-status-bar';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

const MainLayout: React.FC<{ navigation: any }> = ({ navigation }) => {
    const selectedDrawerTab = useSelector(getSelectedTab);
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const drawerProgress = useDrawerProgress() as any;
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 26], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        return {
            transform: [{ scale }],
            borderRadius,
        };
    });

    return (
        <Animated.View className="flex flex-1 px-3 items-center justify-center dark:bg-slate-800 bg-white" style={{ ...animatedStyle }}>
            {/* Header */}
            <Header
                containerStyles={{ height: 50, paddingHorizantal: 14, marginTop: 40, alignItems: 'center' }}
                title={selectedDrawerTab}
                leftComponent={
                    <TouchableOpacity
                        className="h-10 w-10 items-center justify-center border-2 border-gray2 rounded-2xl"
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={icons.menu}></Image>
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity className="items-center justify-center  rounded-2xl" onPress={() => navigation.openDrawer()}>
                        <Image source={dummyData.myProfile.profile_image} className="w-10 h-10 rounded-2xl"></Image>
                    </TouchableOpacity>
                }
            ></Header>
            {/* Content */}
            <View className="flex flex-1">
                <Text>Hello</Text>
            </View>
            {/* Footer */}
            <StatusBar style="dark"></StatusBar>
        </Animated.View>
    );
};

export default MainLayout;
