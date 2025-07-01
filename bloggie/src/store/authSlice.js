import { createSlice } from "@reduxjs/toolkit";

const initialState = { //creating states
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: "auth",  //creating reducers logic
    initialState,
    reducers:{
        //in reducer these are action's
        login: (state, action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        } 
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
