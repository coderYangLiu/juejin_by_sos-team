import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import { Button } from '@arco-design/web-react'

export interface IProps {
  children?: ReactElement
}

const HeaderNav: FC<IProps> = memo(() => {
  return (
    <>
      <Link href={'/'}>
        <Button type="primary">home</Button>
      </Link>
      <Link href={'/post/1'}>
        <Button type="primary">post/1</Button>
      </Link>
      <Link href={'/test'}>
        <Button type="primary">test</Button>
      </Link>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
