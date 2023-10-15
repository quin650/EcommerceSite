import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialStateUser = {
    loading: false,
    userInfo: userInfoFromStorage,
    error:'',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        user_login_request(state){
            state.loading = true;
        },
        user_login_Success(state, action){
            state.loading = false;
            state.userInfo = action.payload
        },
        user_login_Fail(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        user_logout(state){
            return initialStateUser;
        }, 
    },
});

export const userReducer  = userSlice.actions;
export default userSlice;