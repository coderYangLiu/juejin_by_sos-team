import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getMainNavs } from '@/service/api'

export interface LayoutState {
  mainNav: any[]
}

export const fetchMainNavs = createAsyncThunk('fetchMainNavs', async () => await getMainNavs())

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    mainNav: [],
  } as LayoutState,

  reducers: {
    setMainNav(state, action) { state.mainNav = action.payload },
  },

  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action: any) => ({ ...state, ...action.payload.main }))
      .addCase(fetchMainNavs.fulfilled, (state, action) => { state.mainNav = action.payload })
  },
})

export const { setMainNav } = layoutSlice.actions
export default layoutSlice.reducer
