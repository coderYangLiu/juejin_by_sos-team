import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import mainReducer, { fetchMainNavs } from './main'
import homeReducer, { fetchArticles, fetchHomeData, fetchHomeNav } from './home'
import postReducer, { fetchPostData } from './post'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
      home: homeReducer,
      post: postReducer,
    },
    devTools: true,
  })

type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)

export {
  fetchMainNavs,
  fetchArticles, fetchHomeData, fetchHomeNav,
  fetchPostData,
}
