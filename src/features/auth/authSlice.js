import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:"",
    localId:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state,actions) => actions.payload,
        clearUser: (state) => state = {email:"", idToken:""}
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer