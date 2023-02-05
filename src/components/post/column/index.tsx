import { Button } from '@arco-design/web-react'
import Image from 'next/image'
import { memo } from 'react'
import type { FC } from 'react'

import styles from './index.module.less'

export interface IProps {
  column: string
  columnInfo: string
  columnImgUrl: string
}

const Column: FC<IProps> = memo((props) => {
  const { column, columnInfo, columnImgUrl } = props

  return (
    <div className={styles.columnContainer}>
      <div className={styles.columnHeader}>
        <span>文章被收录于专栏:</span>
      </div>
      <div className={styles.content}>
        <Image alt={''} src={columnImgUrl} width={80} height={60} style={{ borderRadius: 4 }} />
        <div className={styles.columnInfo}>
          <p>{column}</p>
          <span>{columnInfo}</span>
        </div>
        <Button type={'primary'} className={styles.columnBtn}>
          关注专栏
        </Button>
      </div>
    </div>
  )
})

Column.displayName = 'Column'
export default Column
