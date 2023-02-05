import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'

import { LOCALDOMAIN } from '@/utils/index'// 引入接口地址

//
import '@/styles/globals.less'
import BaseLayout from '@/components/lauout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface IHeaderNavProps {
  data: any
}

type AppPropsWithLayout = IHeaderNavProps & AppProps & {
  Component: NextPageWithLayout

}

function MyApp({ Component, pageProps, data }: AppPropsWithLayout) {
  // console.log(data[0])

  const getLayout = Component.getLayout
    ?? (page => (
      <>
        <BaseLayout LayoutData={data[0]}>{page}</BaseLayout>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}

// 数据注入
MyApp.getInitialProps = async (): Promise<AppProps & IHeaderNavProps> => {
  const res = await axios.get(`${LOCALDOMAIN}/layouts`, {
    params: {
      'populate[header_navs]': '*',
      'populate[banner]': '*',
      'populate[qr_img]': '*',
      'populate[nav_lists][populate]': '*',
    },
  })
  const data = res.data
  // console.log(data)
  return { ...data }
}
export default MyApp
