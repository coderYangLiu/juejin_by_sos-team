import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getArticles, getHomeData, getHomeNavs } from '@/service/api'
import type { IArticle, IHomeNav } from '@/service/api/types'

export interface HomeState {
  homeData: any
  homeNav: IHomeNav[]
  articles: IArticle[]
}

export const fetchHomeData = createAsyncThunk('fetchMainNav', async () => await getHomeData())
export const fetchHomeNav = createAsyncThunk('fetchHomeNav', async () => await getHomeNavs())
// payload 后期可能有复杂判断 例如: 替换原数据，追加数据等
export const fetchArticles = createAsyncThunk('fetchArticles', async (payload: any) => await getArticles(payload))

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeData: {},
    homeNav: [],
    articles: [],
  } as HomeState,
  reducers: {
    setHomeNav(state, action) { state.homeNav = action.payload },
    setHomeData(state, action) { state.homeData = action.payload },
    setArticles(state, action) { state.articles = action.payload },

    closeBannerById(state, action) {
      const id = action.payload
      const index = state.homeData.banners.findIndex((item: any) => item.id === id)
      if (index !== -1)
        state.homeData.banners.splice(index, 1)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action: any) => ({ ...state, ...action.payload.home }))
      .addCase(fetchHomeData.fulfilled, (state, action) => { state.homeData = action.payload })
      .addCase(fetchHomeNav.fulfilled, (state, action) => { state.homeNav = action.payload })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = state.articles.concat(action.payload)
        // do
        //   state.articles = state.articles.concat(action.payload)
        // while (state.articles.length < 20)
      })
  },
})

export const { setHomeNav, setHomeData, setArticles, closeBannerById } = homeSlice.actions
export default homeSlice.reducer
