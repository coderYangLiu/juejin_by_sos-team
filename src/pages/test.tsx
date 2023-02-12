import { memo } from 'react'
import type { FC, ReactElement } from 'react'

import MyIcon from '@/components/common/icon'

export interface IProps {
  children?: ReactElement
}

const Test: FC<IProps> = memo(() => {
  return (
    <div>
      <div>Test</div>
      <MyIcon type='icon-pinglun' style={{ fontSize: 20, marginRight: 40 }} />
    </div>
  )
})

Test.displayName = 'Test'
export default Test
