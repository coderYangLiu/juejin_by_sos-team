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
      <Header />

      {children}
    </>
  )
})

BaseLayout.displayName = 'BaseLayout'
export default BaseLayout
