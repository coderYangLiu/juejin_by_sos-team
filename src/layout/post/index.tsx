import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import styles from './index.module.less'
import Header from '@/components/header'

export interface IProps {
  children?: ReactElement
}

const PostLayout: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <div className={styles['view-container']}>
      <Header />

      {children}
    </div>
  )
})

PostLayout.displayName = 'PostLayout'
export default PostLayout
