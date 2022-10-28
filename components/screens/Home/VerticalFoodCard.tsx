import { View, Text, StyleProp, TextStyle, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import icons from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';

const VerticalFoodCard: React.FC<{ containerStyle: StyleProp<TextStyle>; item: any; onPress: () => void }> = ({
    containerStyle,
    item,
    onPress,
}) => {
    return (
        <TouchableOpacity className="w-52 p-6 items-center rounded-xl bg-lightGray2" style={containerStyle}>
            {/* Calories and Favourite */}
            <View className="flex flex-row">
                {/* Calories */}
                <View className="flex flex-1 flex-row">
                    <Image source={icons.calories} className="w-7 h-7"></Image>
                    <Text className="text-darkGray2 text-sm font-bold">{item.calories} Calories</Text>
                </View>
                {/* Favourite */}
                <Image
                    source={icons.love}
                    className="w-5 h-5"
                    style={{ tintColor: item.isFavourite ? COLORS.primary : COLORS.gray }}
                ></Image>
            </View>
            {/* Image */}
            <View className="w-36 h-36 items-center justify-center mt-2">
                <Image source={item.image} className="w-full h-full"></Image>
            </View>
            {/* Info */}
            <View className="items-center -my-5">
                <Text className="font-bold text-[16px]">{item.name}</Text>
                <Text className="text-sm text-darkGray2">{item.description}</Text>
                <Text className="mt-3 font-bold text-lg">${item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default VerticalFoodCard;
