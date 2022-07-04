import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    token: "",
    expiry: "",
    userDetails: {},
  
  };
  

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
      setToken:(state,action)=>{
        state.token = action.payload;
      },
      setExpiry:(state,action)=>{
        state.expiry=action.payload;
      },
      setUserDetails:(state,action)=>{
        state.userDetails=action.payload;
      },
      
    },
})

export const {setToken,setExpiry,setUserDetails} = authSlice.actions;
export default authSlice.reducer;