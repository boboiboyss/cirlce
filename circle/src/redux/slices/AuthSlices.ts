import {createSlice} from '@reduxjs/toolkit'


interface User {
    id: number,
    username : string,
    fullName : string,
    email : string,
    photoProfile : string,
    bio : string
}

export interface AuthState {
    user : User
}

const initialState: AuthState = {
    user : {
        id : 0,
        username : "",
        fullName : "",
        email : "",
        photoProfile : "",
        bio : ""
    }
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : { 
        SET_USER: (state, action : {payload:User}) => {
            state.user = action.payload
        }
    }
})

export const {SET_USER} = authSlice.actions

export default authSlice.reducer;