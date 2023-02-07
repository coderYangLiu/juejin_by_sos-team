import { Provider } from 'react-redux'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { wrapper } from '@/store'

//
import '@/styles/globals.less'
import BaseLayout from '@/components/lauout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest)

  const getLayout
    = Component.getLayout
    ?? (page => (
      <>
        <BaseLayout>{page}</BaseLayout>
      </>
    ))

  return (<Provider store={store}>{
    getLayout(<Component {...props.pageProps} />)}
  </Provider>)
}
