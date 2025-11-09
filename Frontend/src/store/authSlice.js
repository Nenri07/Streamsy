import {createSlice} from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    userData:null,
    accessToken:null,
    authStatus:false
    
}
const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.authStatus= true;
            state.userData= action.payload.userdata.data.user;
            state.accessToken= action.payload.userdata.data.accessToken;
        },
        logout:(state,_)=>{
            state.authStatus=false;
            state.userData=null;
            state.accessToken=null;
        },
        refreshData:(state,action)=>{
            state.userData=action.payload.userData.stringifyUserData
            state.accessToken= action.payload.accessToken
            state.authStatus=true
        }

    }
})

export const {login,logout,refreshData}= authSlice.actions;
export default authSlice.reducer