import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseAuthor from '../base'

export interface IProps {
  children?: ReactElement
}

const PostAuthor: FC<IProps> = memo(() => {
  return (
    <div className='sidebar-block'>
      <BaseAuthor>
        <div className="">
          <div>获得点赞 1,111</div>
          <div>文章被阅读 222,222</div>
        </div>
      </BaseAuthor>
    </div>
  )
})

PostAuthor.displayName = 'PostAuthor'
export default PostAuthor
