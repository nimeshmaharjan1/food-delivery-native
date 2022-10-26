import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

const Header: React.FC<{ containerStyles: any; title: string; leftComponent: React.ReactNode; rightComponent: React.ReactNode }> = ({
    containerStyles,
    title,
    leftComponent,
    rightComponent,
}) => {
    return (
        <View style={{ flexDirection: 'row', ...containerStyles }}>
            {/* left */}
            {leftComponent}
            {/* title */}
            <View className="flex flex-1 items-center justify-center">
                <Text className="font-bold text-lg uppercase">{title}</Text>
            </View>
            {/* right */}
            {rightComponent}
        </View>
    );
};

export default Header;
