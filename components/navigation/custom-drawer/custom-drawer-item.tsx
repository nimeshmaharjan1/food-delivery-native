import { Image, Text, TouchableOpacity } from 'react-native';

const CustomDrawerItem: React.FC<{ label: string; icon: any }> = ({ label, icon }) => {
    return (
        <TouchableOpacity className="flex flex-row h-10 mb-2 items-center pl-3 rounded-xl">
            <Image source={icon} className="h-5 w-5" style={{ tintColor: 'white' }}></Image>
            <Text className="ml-3 font-bold text-white text-[15px]">{label}</Text>
        </TouchableOpacity>
    );
};
export default CustomDrawerItem;
