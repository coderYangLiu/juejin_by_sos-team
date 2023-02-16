import { memo } from 'react'
import Link from 'next/link'
import { Card } from '@arco-design/web-react'
import { IconRight } from '@arco-design/web-react/icon'
import type { FC, ReactElement } from 'react'

import styles from './index.module.less'

import { User } from '@/components/author'
import type { IAuthor } from '@/service/api/types'

export interface IProps {
  children?: ReactElement
  authors: IAuthor[]
}

const Users: FC<IProps> = memo(({ authors }) => {
  return (
    <div className='sidebar-block'>
      <Card
        title='🎖️作者榜'
        bodyStyle={{ padding: 0 }}
        style={{ border: 'none' }}
        hoverable
      >
        {
          authors.map(item => (
            <div key={item.id} className={styles.item}>
              <User author={item} />
            </div>
          ))
        }

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
