import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            // if the current theme is light, then set the theme to dark, else set the theme to light.
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        }
});
// The themeSlice is a slice that contains the reducer function toggleTheme as action. The toggleTheme reducer function takes in state and action and as per the role of the reducer function, it toggles the theme from light to dark and vice versa.
export const {toggleTheme} = themeSlice.actions;

// export the reducer function:
export default themeSlice.reducer;