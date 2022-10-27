import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import dummyData from '../../constants/dummy-data';
import HorizontalFoodCard from '../../components/screens/Home/HorizontalFoodCard';

const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [menuList, setMenuList] = React.useState<Array<any>>([]);
    const handleCategoryChange = (categoryID: number, menuTypeId: number) => {
        let selectedMenu = dummyData.menu.find((item) => item.id === menuTypeId);
        setMenuList(selectedMenu?.list.filter((item) => item.categories.includes(categoryID)) as any);
    };
    React.useEffect(() => handleCategoryChange(selectedCategoryId, selectedMenuType), []);
    const searchSection = () => (
        <View className="flex flex-row items-center h-10 mx-3 my-2 px-3 rounded-xl bg-lightGray2">
            {/* Icon */}
            <Image source={icons.search} className="h-5 w-5" style={{ tintColor: 'black' }}></Image>
            {/* Text Input */}
            <TextInput className="flex flex-1 ml-3 text-sm" placeholder="Search..."></TextInput>
            {/* Filter Button */}
            <TouchableOpacity>
                <Image source={icons.filter} className="h-5 w-5" style={{ tintColor: 'black' }}></Image>
            </TouchableOpacity>
        </View>
    );
    return (
        <View className="flex flex-1">
            {/* Search */}
            {searchSection()}
            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <HorizontalFoodCard
                        containerStyle={{
                            height: 130,
                            alignItems: 'center',
                            marginHorizontal: 24,
                            marginBottom: 12,
                        }}
                        imageStyle={{
                            marginTop: 20,
                            height: 110,
                            width: 110,
                        }}
                        item={item}
                        onPress={() => console.log('horizontal food card')}
                    ></HorizontalFoodCard>
                )}
            />
        </View>
    );
};

export default Home;
