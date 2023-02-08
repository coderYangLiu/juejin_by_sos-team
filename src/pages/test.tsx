import { memo } from 'react'
import { useSelector } from 'react-redux'
import type { FC, ReactElement } from 'react'

import type { AppState } from '@/store'
import MyIcon from '@/components/common/icon'

export interface IProps {
  children?: ReactElement
}

const Test: FC<IProps> = memo(() => {
  const { homeNav } = useSelector((store: AppState) => ({
    homeNav: store.layout.homeNav,
  }))
  return (
    <div>
      <div>Test</div>
      {
        homeNav.map(i => <div key={i}>{i}</div>)
      }
      <MyIcon type='icon-pinglun' style={{ fontSize: 20, marginRight: 40 }} />
    </div>
  )
})

Test.displayName = 'Test'
export default Test
