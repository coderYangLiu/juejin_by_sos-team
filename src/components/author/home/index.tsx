import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseAuthor from '../base'
import type { IAuthor } from '@/service/api/types'

export interface IProps {
  children?: ReactElement
  author: IAuthor
}

const HomeAuthor: FC<IProps> = memo((props) => {
  return (
    <div className=''>
      <BaseAuthor author={props.author}>
        <div className="">
          detail
        </div>
      </BaseAuthor>
    </div>
  )
})

HomeAuthor.displayName = 'HomeAuthor'
export default HomeAuthor
