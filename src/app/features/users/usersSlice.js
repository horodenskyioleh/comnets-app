import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: ' John Cena'},
    {id: '1', name: 'Dwayne Johnson'},
    {id: '2', name: 'Dave Gray'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {} 
})


//portiamo tutti gli user allo State
export const selectAllUser = (state) => state.users


export default userSlice.reducer