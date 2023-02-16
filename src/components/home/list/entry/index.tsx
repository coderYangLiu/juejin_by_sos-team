import { memo } from 'react'
import type { FC } from 'react'

import { IconClose } from '@arco-design/web-react/icon'
import { Trigger } from '@arco-design/web-react'
import BaseItem from '../base'

import styles from './index.module.less'
import { ActionList, Dislike } from './cpns'

import type { IArticle } from '@/service/api/types'

const EntryItem: FC<IArticle> = memo((props) => {
  const { info } = props
  return (
    <div className={styles.entry}>
      <BaseItem actionList={<ActionList {...info} />} {...props} />

      <div className={styles.close}>
        <Trigger popup={() => <Dislike/> } mouseEnterDelay={400} mouseLeaveDelay={400} position="br">
          <IconClose style={{ color: '#ccc' }} />
        </Trigger>
      </div>
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
