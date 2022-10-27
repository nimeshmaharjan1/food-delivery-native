export enum BottomTabs {
    home = 'Home',
    search = 'Search',
    cart = 'Cart',
    favourite = 'Favourites',
    notifications = 'Notifications',
    calories = 'calories',
}

import { Dimensions } from 'react-native';
export const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get('window');
