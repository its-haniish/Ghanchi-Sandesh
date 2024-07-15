import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: null,
};

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('loginUser', (state, action) => {
            state.isLoggedIn = true;
        })
        .addCase('logoutUser', (state) => {
            state.isLoggedIn = false;
        })
        .addCase('addToken', (state, action) => {
            state.token = action.payload;
        })
});
