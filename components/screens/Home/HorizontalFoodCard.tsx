import { View, Text, TextStyle, Image, StyleProp, ImageStyle } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '../../../constants/icons';

const HorizontalFoodCard: React.FC<{ containerStyle: TextStyle; imageStyle: StyleProp<ImageStyle>; item: any; onPress: any }> = ({
    containerStyle,
    imageStyle,
    item,
    onPress,
}) => {
    return (
        <TouchableOpacity className="flex flex-row rounded-xl bg-lightGray2" style={containerStyle}>
            {/* Image */}
            <Image source={item.image} style={imageStyle}></Image>
            {/* <Info></Info> */}
            <View className="flex flex-1">
                <Text className="text-[17px] font-bold">{item.name}</Text>
                <Text className="text-sm font-bold text-darkGray2">{item.description}</Text>
                <Text className="mt-1 font-bold text-lg">${item.price}</Text>
                {/* <Calories></Calories> */}
                <View className="flex flex-row absolute" style={{ position: 'absolute', top: -18, right: 20 }}>
                    <Image source={icons.calories} className="h-7 w-7"></Image>
                    <Text className="text-darkGray2 text-sm">{item.calories} Calories</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HorizontalFoodCard;
