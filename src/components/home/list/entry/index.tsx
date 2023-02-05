import { memo } from 'react'
import type { FC } from 'react'

import BaseItem from '../base'
import type { IProps } from '../base'
import { ActionList } from './cpns'

const EntryItem: FC<IProps> = memo((props) => {
  return (
    <div className=''>
      <BaseItem actionList={<ActionList />} {...props}/>
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
