import React, { memo } from 'react'
import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import LowerNav from '../home/nav'
import Header from '@/components/header'
import type { IHeaderNavData } from '@/components/header/cpns/nav/index'
import type { ILowerNavData } from '@/components/home/nav/index'

export interface IProps {
  LayoutData: any
  children?: ReactElement
}
// context数据类型
interface IdefaultContextValue {
  header_navs: IHeaderNavData[]
  nav_lists: ILowerNavData[]
}
// 默认值
const defaultContextValue: IdefaultContextValue = {
  header_navs: [],
  nav_lists: [],
}

// 通过创建React.createContext来创建context并导出-huang
export const appContext = React.createContext(defaultContextValue)

const BaseLayout: NextPage<IProps> = memo((props) => {
  const { children, LayoutData } = props

  return (
    <>
      {/* 3.使用appContext.Provider来传递，value为传递的值 -huang */}
      <appContext.Provider value={LayoutData}>
        {<Header />}
        <LowerNav />
        {children}
      </appContext.Provider>

    </>
  )
})

BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
