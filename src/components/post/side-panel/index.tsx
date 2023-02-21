import React, { memo } from 'react'
import type { FC } from 'react'
import { Divider } from '@arco-design/web-react'
import classNames from 'classnames'
import { IconFullscreen, IconShareInternal, IconStarFill, IconThumbUpFill } from '@arco-design/web-react/icon'
import styles from './index.module.less'
import MyIcon from '@/components/common/icon'
import type { IArticleInfo } from '@/service/api/types'

type IProps = IArticleInfo & {
  sideStatus: boolean
  setSideStatus: (b: boolean) => void
}

const SidePanel: FC<IProps> = memo(({ sideStatus, setSideStatus, like = 0, comment = 0 }) => {
/* 控制前四个icon的显示与隐藏 */
  const hidden = () => {
    setSideStatus(!sideStatus)
  }
  return (
    <div className={styles['action-list']}>
      {sideStatus && (
        <>
          <div className={classNames(styles.sideIcon, styles.info)} nonce={`${like}`}>
            {/* 此处重写定义在myIcon的fontsize值 */}
            <IconThumbUpFill type="icon-dianzan1" className={styles.icon} style={{ fontSize: 20 }}/>
          </div>
          <div className={classNames(styles.sideIcon, styles.info)} nonce={`${comment}`}>
            <MyIcon type="icon-pinglun" className={styles.icon} style={{ fontSize: 20 }}/>
          </div>
          <div className={styles.sideIcon}>
            <IconStarFill className={styles.icon} />
          </div>
          <div className={styles.sideIcon}>
            <IconShareInternal className={styles.icon} />
          </div>
          <Divider/>
          <div className={styles.sideIcon}>
            <MyIcon type="icon-jinggao" className={styles.icon} style={{ fontSize: 20 }}/>
          </div>
        </>
      )
      }
      <div className={styles.sideIcon} onClick={hidden} >
        <IconFullscreen className={classNames(styles.icon, { [styles.active]: !sideStatus })}/>
        {/* <MyIcon type="icon-bg-fullscreen" className={classNames(styles.icon, { [styles.active]: !sideStatus })} style={{ fontSize: 20 }}/> */}
      </div>
    </div>
  )
})

SidePanel.displayName = 'SidePanel'
export default SidePanel
