import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseAuthor from '../base'

export interface IProps {
  children?: ReactElement
}

const HomeAuthor: FC<IProps> = memo(() => {
  return (
    <div className=''>
      <BaseAuthor>
        <div className="">
          detail
        </div>
      </BaseAuthor>
    </div>
  )
})

HomeAuthor.displayName = 'HomeAuthor'
export default HomeAuthor
