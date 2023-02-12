import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { getArticles, getHomeData, getHomeNavs } from '@/service/api'

export interface LayoutState {
  homeData: any
  homeNav: any[]
  articles: any[]
}

export const fetchHomeData = createAsyncThunk('fetchMainNav', async () => await getHomeData())
export const fetchHomeNav = createAsyncThunk('fetchHomeNav', async () => await getHomeNavs())
export const fetchArticles = createAsyncThunk('fetchArticles', async () => await getArticles())

const layoutSlice = createSlice({
  name: 'home',
  initialState: {
    homeData: {},
    homeNav: [],
    articles: [],
  } as LayoutState,
  reducers: {
    setHomeNav(state, action) { state.homeNav = action.payload },
    setHomeData(state, action) { state.homeData = action.payload },
    setArticles(state, action) { state.articles = action.payload },
  },
  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action: any) => ({ ...state, ...action.payload.home }))
      .addCase(fetchHomeData.fulfilled, (state, action) => { state.homeData = action.payload })
      .addCase(fetchHomeNav.fulfilled, (state, action) => { state.homeNav = action.payload })
      .addCase(fetchArticles.fulfilled, (state, action) => { state.articles = action.payload })
  },
})

export const { setHomeNav, setHomeData, setArticles } = layoutSlice.actions
export default layoutSlice.reducer
