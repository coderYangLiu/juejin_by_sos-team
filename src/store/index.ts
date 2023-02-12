import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import layoutReducer, { fetchMainNav } from './layout'

const makeStore = () =>
  configureStore({
    reducer: {
      layout: layoutReducer,
    },
    devTools: true,
  })

type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)

export {
  fetchMainNav,
}
