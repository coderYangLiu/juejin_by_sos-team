import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const ActionList: FC<IProps> = memo(() => {
  return (
    <ul className={styles['action-list']}>
      <li className={styles.item}>123</li>
      <li className={styles.item}>234</li>
      <li className={styles.item}>345</li>
    </ul>
  )
})

ActionList.displayName = 'ActionList'
export default ActionList
