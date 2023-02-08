import { memo } from 'react'
import Link from 'next/link'
import { Card } from '@arco-design/web-react'
import { IconRight } from '@arco-design/web-react/icon'
import type { FC, ReactElement } from 'react'

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
            <IconRight />
          </div>
        </Link>
      </Card>
    </div>
  )
})

Users.displayName = 'Users'
export default Users
