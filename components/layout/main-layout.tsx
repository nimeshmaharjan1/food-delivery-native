import { View, Text } from 'react-native';
import React from 'react';
import { styled, useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Adaptable, AnimateStyle, Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

const MainLayout = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const drawerProgress = useDrawerProgress();
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
        <Animated.View className="flex flex-1 items-center justify-center dark:bg-slate-800 bg-white" style={{ ...animatedStyle }}>
            <Text>Hello</Text>
        </Animated.View>
    );
};

export default MainLayout;
