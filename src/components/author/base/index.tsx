import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Button, Card, Divider } from '@arco-design/web-react'

import Image from 'next/image'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const BaseAuthor: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <Card className={styles.author}>
      <div className={styles.user}>
        <Image
          className={styles['user-avatar']}
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          width={48}
          height={48}
        />
        <div className="user-info">
          <div className="user-name">coder xxx xxx</div>
          <div className="user-desc">coder desc</div>
        </div>
      </div>

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
