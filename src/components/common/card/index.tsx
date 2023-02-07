import { memo } from 'react'
import type { FC, ReactElement } from 'react'

import styles from './index.module.less'

export interface IProps {
  title: string
  children?: ReactElement[] | ReactElement
}

const BaseCard: FC<IProps> = memo((props) => {
  const { title, children } = props

  return (
    <>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </>
  )
})

BaseCard.displayName = 'BaseCard'
export default BaseCard
