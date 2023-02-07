import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export interface LayoutState {
  mainNav: any[]
  homeNav: any[]
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    mainNav: [],
    homeNav: [1, 2, 3],
  } as LayoutState,
  reducers: {
    setMainNav(state, action) {
      state.mainNav = action.payload
    },
    setHomeNav(state, action) {
      state.homeNav = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.layout,
      }
    })
  },
})

export const { setMainNav, setHomeNav } = layoutSlice.actions
export default layoutSlice.reducer
