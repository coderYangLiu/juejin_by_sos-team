import React from 'react'
import type { FC } from 'react'

import styles from './index.module.less'

const Extension: FC = () => {
  return (
    <div className={styles.extensionBanner}>
      <span />
      <div className={styles.wrapper}>
        <a className={styles.title}>安装掘金浏览器插件</a>
        <div className={styles.content}>
          多内容聚合浏览、多引擎快捷搜索、多工具便捷提效、多模式随心畅享，你想要的，这里都有！
        </div>
      </div>
      <button>前往安装</button>
    </div>
  )
}

Extension.displayName = 'Extension'
export default Extension
