import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseItem from '../base'
import { ActionList } from './cpns'

export interface IProps {
  children?: ReactElement
}

const EntryItem: FC<IProps> = memo(() => {
  return (
    <div className=''>
      <BaseItem actionList={<ActionList />} />
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
