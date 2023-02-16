import React, { memo } from 'react'
import type { FC } from 'react'

import Link from 'next/link'
import styles from './index.module.less'
import type { IArticletag } from '@/service/api/types'

export interface IProps {
  category: string

  article_tags?: IArticletag[]
}

const PostInfo: FC<IProps> = memo((props) => {
  const { category, article_tags } = props

  return (
    <div className={styles.tagListBox}>
      <div className={styles.tagList}>
        <div className={styles.tagListTitle}>分类:</div>
        <a className={styles.category} href={'/baidu.com'} target={'_blank'} rel="noreferrer">
          {category}
        </a>
      </div>
      <div className={styles.tagList}>
        <div className={styles.tagListTitle}>标签:</div>
        <div className={styles.tagListContainer}>
          {article_tags?.map(item => (
            <Link key={item.id} href={item.path ?? `/tag/${item.name}`} target={'_blank'} rel="noreferrer">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
})

PostInfo.displayName = 'PostInfo'
export default PostInfo
