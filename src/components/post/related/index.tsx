import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'

import styles from './index.module.less'
import BaseCard from '@/components/common/card'
import type { IArticle } from '@/service/api/types'

export interface IProps {
  children?: ReactElement
  articles: IArticle[]
}

const Related: FC<IProps> = memo(({ articles }) => {
  return (
    <div className="sidebar-block">
      <BaseCard title="相关文章">
        <div className={styles['entry-list']}>
          {articles?.map((item) => {
            return (
              <Link key={item.id} href="#" className={styles.item}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>
                  <span>{item?.info?.like}点赞</span> · <span>{item?.info?.comment}评论</span>
                </div>
              </Link>
            )
          })}
        </div>
      </BaseCard>
    </div>
  )
})

Related.displayName = 'Related'
export default Related
