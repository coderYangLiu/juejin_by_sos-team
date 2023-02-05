import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'

import styles from './index.module.less'
import BaseCard from '@/components/common/card'

export interface IProps {
  children?: ReactElement
}

const Related: FC<IProps> = memo(() => {
  return (
    <div className='sidebar-block'>
      <BaseCard
        title='相关文章'
      >
        <div className={styles['entry-list']}>
          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>

          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>

          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>

          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>

          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>

          <Link href="#" className={styles.item}>
            <div className={styles.title}>
              如何开发一个人人爱的组件？
            </div>
            <div className={styles.desc}>
              <span>xxx点赞</span> · <span>xxx评论</span>
            </div>
          </Link>
        </div>
      </BaseCard>
    </div>
  )
})

Related.displayName = 'Related'
export default Related
