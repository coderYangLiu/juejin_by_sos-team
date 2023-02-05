import { memo } from 'react'
import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'

const items = [
  {
    href: '#',
    image: {
      src: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png',
      width: 36,
      height: 36,
    },
    title: '稀土掘金漫游指南',
  },
  {
    href: '#',
    image: {
      src: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png',
      width: 36,
      height: 36,
    },
    title: '安装掘金浏览器插件',
  },
  {
    href: '#',
    image: {
      src: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png',
      width: 36,
      height: 36,
    },
    title: '前往掘金翻译计划',
  },
]

const Links: FC = memo(() => {
  return (
    <div className="sidebar-block">
      <ul className={styles['link-list']}>
        {
          items.map(({ href, image, title }, index) => (
            <li key={index}>
              <Link href={href} className={styles.item}>
                <Image
                  className={styles.img}
                  src={image.src}
                  alt={title}
                  width={image.width}
                  height={image.height}
                />
                <span className={styles.title}>{title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
})

Links.displayName = 'Links'
export default Links
