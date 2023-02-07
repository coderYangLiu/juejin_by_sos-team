import { memo } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'

export interface IProps {
  name?: string
  href?: string
  rank?: string
  position?: string
}

const User: FC<IProps> = memo((props) => {
  const {
    name = '糯米鸡',
    href = 'https://juejin.cn/user/2506542244708072',
    rank = '5',
    position = '公众号: 码猿技术专栏 @ 蚂蚁金服',
  } = props

  return (
    <div className={styles.user}>
      <Link href={href} className={styles.link}>
        <Image
          className={styles.avatar}
          alt={name}
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          width={48}
          height={48}
        />

        <div className={styles.userInfo}>
          <div className={styles.username}>
            <span className={styles.name}>{name}</span>
            <span className={styles.rank}>
              <Image
                className={styles.img}
                alt={`lv-${rank}`}
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png"
                width={48}
                height={48}
              />
            </span>
          </div>

          <div className={styles.position}>{position}</div>
        </div>
      </Link>
    </div>
  )
})

User.displayName = 'User'
export default User
