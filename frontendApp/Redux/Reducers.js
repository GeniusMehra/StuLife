import {createReducer,} from '@reduxjs/toolkit'

const initialState={
    c:1,
    college:'open',
    department:'open'
}

export const customReducer = createReducer(initialState,{
    increment:(state)=>{
        state.c+=1;
            },
    changeCollege:(state,action)=>{
        state.college=action.payload;
    },
    changeDepartment:(state,action)=>{
        state.department=action.payload;
    }

})