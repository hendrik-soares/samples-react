import { createSlice } from '@reduxjs/toolkit'

interface StateProps {
  value: string[];
}

const initialState: StateProps = {
  value: [],
}


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.value.push(action.payload);      
    },
    DELETE: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  },
})

export const { ADD, DELETE } = postsSlice.actions

export default postsSlice.reducer