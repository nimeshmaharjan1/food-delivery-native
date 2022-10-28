import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import dummyData from '../../constants/dummy-data';
import HorizontalFoodCard from '../../components/screens/Home/HorizontalFoodCard';
import Section from '../../components/screens/Home/Section';
import { DeviceWidth } from '../../lib/enums/enums';
import VerticalFoodCard from '../../components/screens/Home/VerticalFoodCard';

const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [recommendedItems, setRecommendedItems] = React.useState([]);
    const [popularItems, setPopularItems] = React.useState([]);
    const [menuList, setMenuList] = React.useState<Array<any>>([]);
    const handleCategoryChange = (categoryID: number, menuTypeId: number) => {
        let selectedPopularItems = dummyData.menu.find((a) => a.name === 'Popular');
        let selectedRecommendItems = dummyData.menu.find((a) => a.name === 'Recommended');
        let selectedMenu = dummyData.menu.find((item) => item.id === menuTypeId);
        setPopularItems(selectedPopularItems?.list.filter((a) => a.categories.includes(categoryID)) as any);
        setRecommendedItems(selectedRecommendItems?.list.filter((a) => a.categories.includes(categoryID)) as any);
        setMenuList(selectedMenu?.list.filter((item) => item.categories.includes(categoryID)) as any);
    };

    const renderMenuTypes = () => {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    marginBottom: 20,
                }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            className="ml-6"
                            style={{ marginRight: index === dummyData.menu.length - 1 ? 24 : 0 }}
                            onPress={() => {
                                setSelectedMenuType(item.id);
                                handleCategoryChange(selectedCategoryId, item.id);
                            }}
                        >
                            <Text className={`${selectedMenuType == item.id ? 'text-primary' : 'text-black'} text-[16px] font-bold `}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            ></FlatList>
        );
    };

    const renderRecommendedSection = () => {
        return (
            <Section title="Recommended" onPress={() => console.log('Show all recommended.')}>
                <FlatList
                    data={recommendedItems}
                    keyExtractor={(item: any) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 140,
                                    width: DeviceWidth * 0.85,
                                    marginLeft: index == 0 ? 24 : 18,
                                    marginRight: index === recommendedItems.length - 1 ? 24 : 0,
                                    paddingRight: 12,
                                    alignItems: 'center',
                                }}
                                imageStyle={{
                                    marginTop: 38,
                                    height: 140,
                                    width: 140,
                                }}
                                item={item}
                                onPress={() => console.log('Horizontal Food Card')}
                            ></HorizontalFoodCard>
                        );
                    }}
                ></FlatList>
            </Section>
        );
    };

    const renderPopularSection = () => {
        return (
            <Section title="Popular Near You" onPress={() => console.log('Show all popular items')}>
                <FlatList
                    data={popularItems}
                    keyExtractor={(item: any) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <VerticalFoodCard
                                containerStyle={{
                                    marginLeft: index == 0 ? 24 : 18,
                                    marginRight: index == popularItems.length - 1 ? 24 : 0,
                                }}
                                item={item}
                                onPress={() => console.log('Vertical Food Card')}
                            ></VerticalFoodCard>
                        );
                    }}
                ></FlatList>
            </Section>
        );
    };

    const renderFoodCategories = () => {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={(item: any) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            className={`flex flex-row h-14 mt-6 ${index == 0 ? 'ml-6' : 'ml-3'} ${
                                index == dummyData.categories.length - 1 ? 'mr-6' : 'mr-0'
                            } px-2 rounded-xl ${selectedCategoryId === item.id ? 'bg-primary' : 'bg-lightGray2'}`}
                        ></TouchableOpacity>
                    );
                }}
            ></FlatList>
        );
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
        <View className="flex flex-1 pb-32">
            {/* Search */}
            {searchSection()}
            {/* List */}
            <FlatList
                ListHeaderComponent={
                    <View>
                        {/* Food Categories */}
                        {renderFoodCategories()}
                        {/* Popular Section */}
                        {renderPopularSection()}
                        {/* Recommended Section */}
                        {renderRecommendedSection()}
                        {/* Menu Types */}
                        {renderMenuTypes()}
                    </View>
                }
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
