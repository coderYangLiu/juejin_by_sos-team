import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'

import styles from './index.module.less'
import BaseCard from '@/components/common/card'

interface IRelatedPost {
  id: string
  title: string
  starNum: string
  remarkNum: string
}

export interface IProps {
  children?: ReactElement
  relatedPosts: IRelatedPost[]
}

const Related: FC<IProps> = memo((props) => {
  const { relatedPosts } = props

  return (
    <div className="sidebar-block">
      <BaseCard title="相关文章">
        <div className={styles['entry-list']}>
         {/*  {Array(6).fill(0).map((i, index) => {
            return (
              <Link key={index} href="#" className={styles.item}>
                <div className={styles.title}>如何开发一个人人爱的组件？</div>
                <div className={styles.desc}>
                  <span>xxx点赞</span> · <span>xxx评论</span>
                </div>
              </Link>
            )
          })} */}
            {relatedPosts?.map((relatedPost) => {
              return (
                <Link key={relatedPost.id} href="#" className={styles.item}>
                    <div className={styles.title}>{relatedPost.title}</div>
                    <div className={styles.desc}>
                        <span>{relatedPost.starNum}点赞</span> · <span>{relatedPost.remarkNum}评论</span>
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
