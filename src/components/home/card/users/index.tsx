import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import { Card } from '@arco-design/web-react'

import Link from 'next/link'
import styles from './index.module.less'
import { User } from '@/components/author'

export interface IProps {
  children?: ReactElement
}

const Users: FC<IProps> = memo(() => {
  return (
    <div className='sidebar-block'>
      <Card
        title='🎖️作者榜'
        bodyStyle={{ padding: 0 }}
        style={{ border: 'none' }}
        hoverable
      >
        <div className={styles.item}>
          <User />
        </div>
        <div className={styles.item}>
          <User />
        </div>
        <div className={styles.item}>
          <User />
        </div>

        <Link href="#" className={styles.more}>
          <div className={styles.contnet}>
            <span>完整榜单</span>
            <i> &gt; </i>
          </div>
        </Link>
      </Card>
    </div>
  )
})

Users.displayName = 'Users'
export default Users
