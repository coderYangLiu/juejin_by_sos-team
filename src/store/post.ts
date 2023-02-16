import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getPostData } from '@/service/api'
import type { IPostData } from '@/service/api/types'

export interface postState {
  postData: IPostData
}

export const fetchPostData = createAsyncThunk('fetchPostData', async () => await getPostData())

const postSlice = createSlice({
  name: 'post',
  initialState: {
    postData: {},
  } as postState,
  reducers: {
    setPostData(state, action) { state.postData = action.payload },

    closeBannerById(state, action) {
      const id = action.payload
      const index = state.postData.banners.findIndex((item: any) => item.id === id)
      if (index !== -1)
        state.postData.banners.splice(index, 1)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action: any) => ({ ...state, ...action.payload.post }))
      .addCase(fetchPostData.fulfilled, (state, action) => { state.postData = action.payload })
  },
})

export const { setPostData } = postSlice.actions
export default postSlice.reducer
