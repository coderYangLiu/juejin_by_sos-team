import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Header from '@/components/header'

export interface IProps {
  children?: ReactElement
}

const BaseLayout: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <>
      <Header />{/*仅上方的导航栏+logo*/}

      {children}{/*下方的所有：tab栏 + home-list + sidebar(component-layout-home)*/}
    </>
  )
})

BaseLayout.displayName = 'BaseLayout'
export default BaseLayout
