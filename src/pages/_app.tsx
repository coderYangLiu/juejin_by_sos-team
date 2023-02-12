import { Provider } from 'react-redux'

import type { ReactElement, ReactNode } from 'react'
import App from 'next/app'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { fetchMainNavs, wrapper } from '@/store'

//
import '@/styles/globals.less'
import BaseLayout from '@/components/lauout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest)

  const getLayout
    = Component.getLayout
    ?? (page => (
      <>
        <BaseLayout>{page}</BaseLayout>
      </>
    ))

  return (
    <Provider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  )
}

(MyApp as any).getInitialProps = wrapper.getInitialAppProps(store => async (appCtx) => {
  // You have to do dispatches first, before...
  await store.dispatch(fetchMainNavs())

  // @see next-redux-wrapper
  const childrenGip = await App.getInitialProps(appCtx)

  return {
    pageProps: { ...childrenGip.pageProps },
  }
})

export default MyApp
