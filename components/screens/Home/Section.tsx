import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Section: React.FC<{ title: string; onPress: () => void; children: React.ReactNode }> = ({ title, onPress, children }) => {
    return (
        <View>
            {/* // Header */}
            <View className="flex flex-row mx-6 mt-6 mb-4">
                <Text className="flex flex-1 font-bold">{title}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text className="text-primary">Show All</Text>
                </TouchableOpacity>
            </View>
            {/* //Content */}
            {children}
        </View>
    );
};

export default Section;
