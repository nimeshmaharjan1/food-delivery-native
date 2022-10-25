import { RootState } from './../index';
import { createSlice } from '@reduxjs/toolkit';

interface State {
    selectedTab: string;
}

const initialState = {
    selectedTab: '',
};

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setSelectedDrawerTab: (state: State, action) => {
            state.selectedTab = action.payload;
        },
    },
});
export const getSelectedTab = (state: RootState) => state.drawerStore.selectedTab;
export const { setSelectedDrawerTab } = drawerSlice.actions;
export default drawerSlice.reducer;
