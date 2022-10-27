import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const BottomTab: React.FC<{
    label: string;
    icon: any;
    isFocused: boolean;
    onPress: any;
    innerContainerStyle: any;
    outerContainerStyle: any;
}> = ({ innerContainerStyle, outerContainerStyle, label, icon, isFocused, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, outerContainerStyle]}>
                <Animated.View
                    style={[
                        {
                            flexDirection: 'row',
                            width: '80%',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                        },
                        innerContainerStyle,
                    ]}
                >
                    <Image source={icon} style={{ width: 20, height: 20, tintColor: isFocused ? 'white' : '#898B9A' }}></Image>
                    {isFocused && (
                        <Text numberOfLines={1} className="ml-1 text-white text-sm font-bold">
                            {label}
                        </Text>
                    )}
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default BottomTab;
