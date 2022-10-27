import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { styled, useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
    Adaptable,
    AnimateStyle,
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Header from './header';
import { useSelector } from 'react-redux';
import { getSelectedTab, setSelectedDrawerTab } from '../../../store/modules/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '../../../constants/icons';
import dummyData from '../../../constants/dummy-data';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch } from '../../../store';

import TabButton from './bottom-tab/tab-button';
import { BottomTabs, DeviceHeight, DeviceWidth } from '../../../lib/enums/enums';
import constants from '../../../constants/constants';
import Home from '../../../screens/Home';
import Cart from '../../../screens/Cart';
import Favourites from '../../../screens/Favourites';
import Search from '../../../screens/Search';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

const MainLayout: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useAppDispatch();
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
    const selectedTab = useSelector(getSelectedTab);
    const setSelectedTab = (tab: string) => {
        dispatch(setSelectedDrawerTab(tab));
        navigation.navigate('MainLayout');
    };

    /**
     * Reanimated Shared Values
     */
    const homeTabFlex = useSharedValue(0);
    const homeTabColor = useSharedValue('#FFFFFF');
    const cartTabFlex = useSharedValue(0);
    const cartTabColor = useSharedValue('#FFFFFF');
    const favouriteTabFlex = useSharedValue(0);
    const favouriteTabColor = useSharedValue('#FFFFFF');
    const notificationsTabFlex = useSharedValue(0);
    const notificationsTabColor = useSharedValue('#FFFFFF');
    const searchTabFlex = useSharedValue(0);
    const searchTabColor = useSharedValue('#FFFFFF');

    /**
     * Reanimated animated style
     */
    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value,
        };
    });
    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value,
        };
    });
    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value,
        };
    });
    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value,
        };
    });
    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value,
        };
    });
    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favouriteTabColor.value,
        };
    });

    const notificationsFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationsTabFlex.value,
        };
    });
    const notificationsColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationsTabColor.value,
        };
    });
    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value,
        };
    });
    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value,
        };
    });

    const drawerItemsTop = [
        { label: 'Home', icon: icons.home, outerContainerStyle: homeFlexStyle, innerContainerStyle: homeColorStyle },
        { label: 'Cart', icon: icons.cart, outerContainerStyle: cartFlexStyle, innerContainerStyle: cartColorStyle },
        { label: 'Favourites', icon: icons.favourite, outerContainerStyle: favouriteFlexStyle, innerContainerStyle: favouriteColorStyle },
        // {
        //     label: 'Notifications',
        //     icon: icons.notifications,
        //     outerContainerStyle: notificationsFlexStyle,
        //     innerContainerStyle: notificationsColorStyle,
        // },

        {
            label: 'Search',
            icon: icons.search,
            outerContainerStyle: searchFlexStyle,
            innerContainerStyle: searchColorStyle,
        },
    ];

    const mainContentListRef = React.useRef<FlatList>(null);

    React.useEffect(() => {
        if (selectedTab === BottomTabs.home) {
            mainContentListRef?.current?.scrollToIndex({
                index: 0,
                animated: false,
            });
            homeTabFlex.value = withTiming(4, { duration: 370 });
            homeTabColor.value = withTiming('#FF6C44', { duration: 370 });
        } else {
            homeTabFlex.value = withTiming(1, { duration: 370 });
            homeTabColor.value = withTiming('#FFFFFF', { duration: 370 });
        }

        if (selectedTab === BottomTabs.search) {
            mainContentListRef?.current?.scrollToIndex({
                index: 1,
                animated: false,
            });
            searchTabFlex.value = withTiming(4, { duration: 370 });
            searchTabColor.value = withTiming('#FF6C44', { duration: 370 });
        } else {
            searchTabFlex.value = withTiming(1, { duration: 370 });
            searchTabColor.value = withTiming('#FFFFFF', { duration: 370 });
        }

        if (selectedTab === BottomTabs.cart) {
            mainContentListRef?.current?.scrollToIndex({
                index: 2,
                animated: false,
            });
            cartTabFlex.value = withTiming(4, { duration: 370 });
            cartTabColor.value = withTiming('#FF6C44', { duration: 370 });
        } else {
            cartTabFlex.value = withTiming(1, { duration: 370 });
            cartTabColor.value = withTiming('#FFFFFF', { duration: 370 });
        }
        if (selectedTab === BottomTabs.favourite) {
            mainContentListRef?.current?.scrollToIndex({
                index: 3,
                animated: false,
            });
            favouriteTabFlex.value = withTiming(4, { duration: 370 });
            favouriteTabColor.value = withTiming('#FF6C44', { duration: 370 });
        } else {
            favouriteTabFlex.value = withTiming(1, { duration: 370 });
            favouriteTabColor.value = withTiming('#FFFFFF', { duration: 370 });
        }

        // if (selectedTab === BottomTabs.notifications) {
        //     notificationsTabFlex.value = withTiming(4, { duration: 370 });
        //     notificationsTabColor.value = withTiming('#FF6C44', { duration: 370 });
        // } else {
        //     notificationsTabFlex.value = withTiming(1, { duration: 370 });
        //     notificationsTabColor.value = withTiming('#FFFFFF', { duration: 370 });
        // }
    }, [selectedTab]);
    return (
        <Animated.View className="flex flex-1 dark:bg-slate-800 bg-white" style={{ ...animatedStyle }}>
            {/* Header */}
            <Header
                containerStyles={{ height: 50, paddingHorizantal: 14, alignItems: 'center' }}
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
                <FlatList
                    ref={mainContentListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={DeviceWidth}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ height: DeviceHeight, width: DeviceWidth }}>
                                {item.label === BottomTabs.home && <Home></Home>}
                                {item.label === BottomTabs.cart && <Cart></Cart>}
                                {item.label === BottomTabs.favourite && <Favourites></Favourites>}
                                {item.label === BottomTabs.search && <Search></Search>}
                            </View>
                        );
                    }}
                />
            </View>
            {/* Footer */}
            <View style={{ height: 100 }} className="justify-end">
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={['transparent', '#DDDDDD']}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                    }}
                ></LinearGradient>
                {/* Tabs */}
                <View className="flex-1 flex-row px-3 bg-white" style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    {drawerItemsTop.map((item) => (
                        <TabButton
                            icon={item.icon}
                            label={item.label}
                            isFocused={selectedTab === item.label ? true : false}
                            innerContainerStyle={item.innerContainerStyle}
                            outerContainerStyle={item.outerContainerStyle}
                            onPress={() => setSelectedTab(item.label)}
                            key={item.label}
                        ></TabButton>
                    ))}
                </View>
            </View>
        </Animated.View>
    );
};

export default MainLayout;
