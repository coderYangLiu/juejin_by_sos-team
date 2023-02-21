import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getMainNavs } from '@/service/api'
import type { IMainNav } from '@/service/api/types'

export interface MainState {
  mainNav: IMainNav[]
}

export const fetchMainNavs = createAsyncThunk('fetchMainNavs', async () => await getMainNavs())

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    mainNav: [],
  } as MainState,

  reducers: {
    setMainNav(state, action) { state.mainNav = action.payload },
  },

  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action: any) => ({ ...state, ...action.payload.main }))
      .addCase(fetchMainNavs.fulfilled, (state, action) => { state.mainNav = action.payload.sort((a, b) => a.order - b.order) })
  },
})

export const { setMainNav } = mainSlice.actions
export default mainSlice.reducer
