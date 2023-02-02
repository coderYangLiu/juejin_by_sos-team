import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//
import '@/styles/globals.less'
import BaseLayout from '@/components/lauout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
    ?? (page => (
      <>
        <BaseLayout>{page}</BaseLayout>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}
