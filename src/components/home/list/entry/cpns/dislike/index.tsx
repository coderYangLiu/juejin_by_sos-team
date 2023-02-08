import { memo } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import styles from './index.module.less'

export interface IProps {
  author?: string
}

const Dislike: FC<IProps> = memo((props) => {
  const { author = 'xxxx' } = props
  return (
    <div className={styles['dislike-menu']}>
      <div className={styles['menu-item']}>
        <span className={classNames(styles['menu-icon'], styles['icon-dislike'])}></span>
        <span className={styles['menu-text']}>
          不感兴趣
        </span>
      </div>
      <div className={styles['menu-item']}>
        <span className={classNames(styles['menu-icon'], styles['icon-block-user'])}></span>
        <span className="tooltip">
          <span className="byte-tooltip__wrapper">
            <span className={styles['menu-text']}>
              屏蔽作者：{author}
            </span>
          </span>
        </span>
      </div>
      <div className={styles['menu-item']}>
        <span className={classNames(styles['menu-icon'], styles['icon-block-tag'])}></span>
        <span className={styles['menu-text']}>
          屏蔽标签
        </span>
        <span className="menu-icon icon-arrow"></span>
      </div>
      <div className={styles['menu-item']}>
        <span className={classNames(styles['menu-icon'], styles['icon-report'])}></span>
        <span className={styles['menu-text']}>
          举报
        </span>
      </div>
    </div>
  )
})

Dislike.displayName = 'Dislike'
export default Dislike
