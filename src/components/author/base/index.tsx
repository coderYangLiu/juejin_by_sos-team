import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Button, Card, Divider } from '@arco-design/web-react'

import User from '../user'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const BaseAuthor: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <Card className={styles.author}>
      <User />

      <div className={styles.operate}>
        <Button>关注</Button>
        <Button>私信</Button>
      </div>

      <Divider style={{ margin: '15px 0' }} />

      {children}
    </Card>
  )
})

BaseAuthor.displayName = 'BaseAuthor'
export default BaseAuthor
