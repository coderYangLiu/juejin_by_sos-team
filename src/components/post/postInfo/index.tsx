import React, { memo } from 'react'
import type { FC } from 'react'

import styles from './index.module.less'

export interface IProps {
  labels: string[]

  category: string
}

const PostInfo: FC<IProps> = memo((props) => {
  const { labels, category } = props

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
          {labels.map(item => (
            <a key={item} href={'/baidu.com'} target={'_blank'} rel="noreferrer">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
})

PostInfo.displayName = 'PostInfo'
export default PostInfo
