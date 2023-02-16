import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Card, Divider } from '@arco-design/web-react'

import classNames from 'classnames'
import User from '../user'
import styles from './index.module.less'
import type { IAuthor } from '@/service/api/types'

export interface IProps {
  author: IAuthor
  children?: ReactElement
}

const BaseAuthor: FC<IProps> = memo((props) => {
  const { children, author } = props

  return (
    <Card className={styles.author}>
      <User author={author}/>

      <div className={styles.operate}>
        <button className={styles.btn} >
          关注
        </button>
        <button className={classNames(styles.btn, styles.im)} >
          私信
        </button>
      </div>

      <Divider style={{ margin: '15px 0' }} />

      {children}
    </Card>
  )
})

BaseAuthor.displayName = 'BaseAuthor'
export default BaseAuthor
