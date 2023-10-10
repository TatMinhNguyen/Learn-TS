import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        users: {
            allUsers:null,
            isFetching:false,
            error:false
        },
    },
    reducers:{
            getUsersStart: (state)=>{
                state.users.isFetching = true;
            },
            getUsersSuccess: (state,action) =>{
                state.users.isFetching = false;
                state.users.allUsers = action.payload;
            },
            getUsersFailed: (state) => {
                state.users.isFetching = false;
                state.users.error = true;
            },
            deleteUserStart: (state)=>{
                state.users.isFetching = true;
            },
            deleteUsersSuccess: (state,action)=>{
                state.users.isFetching = false;
                state.msg = action.payload;
            },
            deleteUserFailed: (state,action)=>{
                state.users.isFetching = false;
                state.users.error = true;
                state.msg = action.payload;
            },
            createUserStart: (state) => {
                state.users.isFetching = true;
                state.users.error = false;
            },
            createUserSuccess: (state) => {
                state.users.pending = false;
                state.users.error = false;
            },
            createUserFailed: (state) => {
                state.users.pending = false;
                state.users.error = true;
            },
            updateUserStart: (state) => {
                state.users.isFetching = true;
                state.users.error = false;
            },
            updateUserSuccess: (state) => {
                state.users.isFetching = false;
                state.users.error = false
            },
            updateUserfailed: (state) => {
                state.users.isFetching = false;
                state.users.error = true;
            }
    }
})

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
    deleteUserStart,
    deleteUsersSuccess,
    deleteUserFailed,
    createUserFailed,
    createUserStart,
    createUserSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserfailed,
} = userSlice.actions;

export default userSlice.reducer;