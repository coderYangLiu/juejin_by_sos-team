import { memo } from 'react'
import type { FC, ReactElement } from 'react'

export interface IProps {
  children?: ReactElement
}

const EntryItem: FC<IProps> = memo(() => {
  // const { children } = props

  return (
    <div className=''>
      EntryItem <br />
      title <br />
      deac <br />
      info <br />

      <br /><br /><br />
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
