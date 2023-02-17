import { memo } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classNames from 'classnames'
import { IconClose } from '@arco-design/web-react/icon'
import styles from './index.module.less'

export interface IProps {
  url?: string
  hasDesc?: boolean
  closable?: boolean
  width?: number
  height?: number
  handleClose?: () => void
}

const Banner: FC<IProps> = memo((props) => {
  const {
    url = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4023ed80e2794fb48858b4809b17f139~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp',
    closable,
    width,
    height,
    hasDesc = true,
    handleClose,
  } = props

  return (
    <div className={classNames('sidebar-block', styles.banner)}>
      <Link href="#">
        <Image src={url} alt="banner" priority className={styles['banner-image']} width={width ?? 240} height={height ?? 200} />
      </Link>

      {hasDesc && (
        <Link href="#" className={styles['banner-desc']}>
          <span className={styles.inco}>投放 </span>
          <span>广告</span>
        </Link>
      )}

      {closable && (
        <div className={styles.cover}>
          <IconClose className={styles.close} onClick={handleClose} />
        </div>
      )}
    </div>
  )
})

Banner.displayName = 'Banner'
export default Banner
