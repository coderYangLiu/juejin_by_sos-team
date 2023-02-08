import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import styles from './index.module.less'
import MyIcon from '@/components/common/icon'

export interface IProps {
  children?: ReactElement
}

const ActionList: FC<IProps> = memo(() => {
  return (
    <ul className={styles['action-list']}>
      <li className={styles.item}>
        <MyIcon type="icon-chakan1" className={styles.icon}/>
        123
      </li>
      <li className={styles.item}>
        <MyIcon type="icon-dianzan1" className={styles.icon}/>
        234
      </li>
      <li className={styles.item}>
        <MyIcon type="icon-icon-pinglun" className={styles.icon} style={{ transform: 'rotateY(180deg)', fontSize: 16 }}/>
        345
      </li>
    </ul>
  )
})

ActionList.displayName = 'ActionList'
export default ActionList
