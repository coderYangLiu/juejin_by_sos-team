import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getHeaderNav } from '@/service/api'

export interface LayoutState {
  mainNav: any[]
  homeNav: any[]
}

export const fetchMainNav = createAsyncThunk('fetchMainNav', async () => await getHeaderNav())

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
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.layout,
        }
      })
      .addCase(fetchMainNav.fulfilled, (state, action) => {
        state.mainNav = action.payload
      })
  },
})

export const { setMainNav, setHomeNav } = layoutSlice.actions
export default layoutSlice.reducer
