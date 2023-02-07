import { memo } from 'react'
import type { FC, ReactElement } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const User: FC<IProps> = memo(() => {
  const userNameStyle = {
    fontSize: '1.16rem',
    fontWeight: 400,
    color: '#333',
  }

  const userDescStyle = {
    color: '#909090',
    fontSize: '1rem',
  }

  const data = {
    name: '糯米鸡',
    href: 'https://juejin.cn/user/2506542244708072',
    rank: '5',
    position: '公众号: 码猿技术专栏 @ 蚂蚁金服',
  }

  return (
    <div className={styles.user}>
      <a href={data.href} className={styles.link}>
        <img
          src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/24/1710d2d313678bc6~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
          alt={data.name}
          className={styles.avatar}
          loading="lazy"
        />
        <div className={styles.userInfo}>
          <div className={styles.username}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.rank}>
              <img
                className={styles.img}
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png"
                alt= {'lv-' + 'data.rank'}
                title="创作等级"
              ></img>
            </span>
          </div>

          <div className={styles.position}>{data.position}</div>
        </div>
      </a>

    </div>
  )

/*   return (
    <Link href="#" className={styles.user}>
      <Image
        className={styles['user-avatar']}
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        width={48}
        height={48}
      />
      <div className="user-info">
        <div className="user-name" style={userNameStyle}>coder xxx xxx</div>
        <div className="user-desc" style={userDescStyle}>coder desc</div>
      </div>
    </Link>
  ) */
})

User.displayName = 'User'
export default User
