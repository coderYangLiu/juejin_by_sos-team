import { memo } from 'react'
import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'

const Links: FC = memo(() => {
  return (
    <div className="sidebar-block">
      <ul className={styles['link-list']}>
        <li>
          <Link href="#" className={styles.item}>
            <Image
              className={styles.img}
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png"
              alt="links"
              width={36}
              height={36}
            />
            <span className={styles.title}>稀土掘金漫游指南</span>
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.item}>
            <Image
              className={styles.img}
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
              alt="links"
              width={36}
              height={36}
            />
            <span className={styles.title}>安装掘金浏览器插件</span>
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.item}>
            <Image
              className={styles.img}
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"
              alt="links"
              width={36}
              height={36}
            />
            <span className={styles.title}>前往掘金翻译计划</span>
          </Link>
        </li>
      </ul>
    </div>
  )
})

Links.displayName = 'Links'
export default Links
