import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseAuthor from '../base'
import type { IAuthor } from '@/service/api/types'
import { formatNumber } from '@/utils/format'

export interface IProps {
  children?: ReactElement
  author: IAuthor
}

const PostAuthor: FC<IProps> = memo((props) => {
  const { author } = props
  return (
    <div className='sidebar-block'>
      <BaseAuthor author={author}>
        <div className="">
          <div>获得点赞 {formatNumber(author.count?.zan)}</div>
          <div>文章被阅读 {formatNumber(author.count?.view)}</div>
        </div>
      </BaseAuthor>
    </div>
  )
})

PostAuthor.displayName = 'PostAuthor'
export default PostAuthor
