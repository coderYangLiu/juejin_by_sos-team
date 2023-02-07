import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import type { AppState } from '@/store'

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
    </div>
  )
})

Test.displayName = 'Test'
export default Test
