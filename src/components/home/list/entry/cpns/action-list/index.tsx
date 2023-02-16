import { memo } from 'react'
import type { FC } from 'react'
import styles from './index.module.less'
import MyIcon from '@/components/common/icon'
import type { IArticleInfo } from '@/service/api/types'

const ActionList: FC<IArticleInfo> = memo((props) => {
  const { view, comment, like } = props
  return (
    <ul className={styles['action-list']}>
      <li className={styles.item}>
        <MyIcon type="icon-chakan1" className={styles.icon}/>
        {view}
      </li>
      <li className={styles.item}>
        <MyIcon type="icon-dianzan1" className={styles.icon}/>
        {like}
      </li>
      <li className={styles.item}>
        <MyIcon type="icon-icon-pinglun" className={styles.icon} style={{ transform: 'rotateY(180deg)', fontSize: 16 }}/>
        {comment}
      </li>
    </ul>
  )
})

ActionList.displayName = 'ActionList'
export default ActionList
